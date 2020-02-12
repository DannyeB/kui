/*
 * Copyright 2020 IBM Corporation
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

/** DO NOT REMOVE; Content-Security-Policy enforcement */
/* eslint-disable @typescript-eslint/camelcase,prefer-const */
declare let _kuiNonce: string
declare let __webpack_nonce__: string
__webpack_nonce__ = _kuiNonce

/** our Main content provider */
import renderMain from './Client'

/** boot Kui! */
import('@kui-shell/core').then(_ => _.boot(renderMain))
