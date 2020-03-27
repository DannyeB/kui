/*
 * Copyright 2019 IBM Corporation
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

import { Tab, i18n } from '@kui-shell/core'
import { IBMCloudPluginCommand, isIBMCloudPluginCommand } from '../models/plugin'

const strings = i18n('plugin-ibmcloud/plugin')

/**
 * Display resource version as a badge
 *
 */
export default {
  when: isIBMCloudPluginCommand,
  mode: {
    mode: 'try-command',
    label: strings('Try It Out'),
    command: (tab: Tab, command: IBMCloudPluginCommand) => command.prettyName,
    kind: 'drilldown' as const
  }
}