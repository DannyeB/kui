/*
 * Copyright 2017 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Common, CLI, ReplExpect, SidecarExpect, Selectors, Util } from '@kui-shell/test'

import * as openwhisk from '@kui-shell/plugin-openwhisk/tests/lib/openwhisk/openwhisk'

const triggerName = 'ppp'

describe('Add parameters to triggers', function(this: Common.ISuite) {
  before(openwhisk.before(this))
  after(Common.after(this))

  it('should create a trigger', () =>
    CLI.command(`wsk trigger update ${triggerName}`, this.app)
      .then(ReplExpect.ok)
      .then(SidecarExpect.open)
      .then(SidecarExpect.showing(triggerName)))

  it('should add a parameter with explicit trigger name', () =>
    CLI.command(`wsk trigger set x=1 in ${triggerName}`, this.app)
      .then(ReplExpect.justOK)
      .then(SidecarExpect.open)
      .then(SidecarExpect.showing(triggerName))
      .then(app => app.client.getText(`${Selectors.SIDECAR_CONTENT} .trigger-source`))
      .then(Util.expectStruct({ x: 1 })))

  it('should add a parameter with implicit trigger name', () =>
    CLI.command('wsk trigger set y=1', this.app)
      .then(ReplExpect.justOK)
      .then(SidecarExpect.open)
      .then(SidecarExpect.showing(triggerName))
      .then(app => app.client.getText(`${Selectors.SIDECAR_CONTENT} .trigger-source`))
      .then(Util.expectStruct({ x: 1, y: 1 })))

  it('should update a parameter value with implicit trigger name', () =>
    CLI.command('wsk trigger set x=2', this.app)
      .then(ReplExpect.justOK)
      .then(SidecarExpect.open)
      .then(SidecarExpect.showing(triggerName))
      .then(app => app.client.getText(`${Selectors.SIDECAR_CONTENT} .trigger-source`))
      .then(Util.expectStruct({ x: 2, y: 1 })))
})
