/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

async function main() {
    const extensionId = 'customer-custom-mass-action'

    return {
        statusCode: 200,
        body: {
            registration: {
                customer: {
                    massActions: [
                        {
                            actionId: `${extensionId}::customer-mass-action`,
                            label: 'Customer Mass Action',
                            type: `${extensionId}.customer-mass-action`,
                            confirm: {
                                title: 'Mass Action',
                                message: 'Are you sure your want to proceed with Mass Action on selected customers?'
                            },
                            path: '#/customer-mass-action',
                            selectionLimit: 1
                        },
                        {
                            actionId: `${extensionId}::mass-action-with-redirect`,
                            label: 'Mass Action With Redirect',
                            title: 'Customer Mass Action With Redirect',
                            type: `${extensionId}.mass-action-with-redirect`,
                            path: '#/mass-action-with-redirect'
                        }
                    ]
                }
            }
        }
    }
}

exports.main = main
