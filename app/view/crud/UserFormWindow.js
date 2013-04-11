/*
 Copyright (c) 2013 [ninth avenue media, LLC] (mailto: paul.smith.iv@ninthavenuemedia.com)

 extjs-code-sample is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 extjs-code-sample is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with extjs-code-sample.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * User form window for editing/creating new UserDTO's
 */
Ext.define('ExtJSCodeSample.view.crud.UserFormWindow', function() {
    return {
        extend: 'Ext.window.Window',

        require: [
            'nineam.locale.LocaleManager'
        ],

        alias: 'widget.userWindow',

        modal: true,
        resizable: false,

        items: [{
            xtype: 'form',

            width: '100%',
            flex: 1,

            layout: {
                type: 'vbox',
                padding: '10px 10px 10px 10px'
            },

            items: [{
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },

                items: [{
                    xtype: 'label',
                    width: 120,
                    plugins: [
                        { ptype: 'localization', method: 'setText', key: 'crud.window.name' }
                    ]
                },{
                    xtype: 'textfield',
                    name: 'name',
                    width: 180,
                    allowBlank: false
                }]
            },{
                xtype: 'container',
                height: 5
            },{
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },

                items: [{
                    xtype: 'label',
                    width: 120,
                    plugins: [
                        { ptype: 'localization', method: 'setText', key: 'crud.window.phone' }
                    ]
                },{
                    xtype: 'textfield',
                    name: 'phone',
                    width: 180,
                    allowBlank: false
                }]
            },{
                xtype: 'container',
                height: 5
            },{
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },

                items: [{
                    xtype: 'label',
                    width: 120,
                    plugins: [
                        { ptype: 'localization', method: 'setText', key: 'crud.window.email' }
                    ]
                },{
                    xtype: 'textfield',
                    name: 'email',
                    width: 180,
                    allowBlank: false
                }]
            },{
                xtype: 'container',
                height: 5
            },{
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'top'
                },

                items: [{
                    xtype: 'label',
                    width: 120,
                    padding: '3px 0px 0px 0px',
                    plugins: [
                        { ptype: 'localization', method: 'setText', key: 'crud.window.notes' }
                    ]
                },{
                    xtype: 'textfield',
                    name: 'notes',
                    width: 180,
                    height: 100
                }]
            },{
                xtype: 'container',
                height: 5
            },{
                xtype: 'container',
                width: 300,

                layout: {
                    type: 'hbox',
                    pack: 'end'
                },

                items: [{
                    xtype: 'button',
                    action: 'reset',
                    plugins: [
                        { ptype: 'localization', method: 'setText', key: 'login.reset' }
                    ]
                },{
                    xtype: 'container',
                    width: 5
                },{
                    xtype: 'button',
                    action: 'submit',
                    formBind: true,
                    disabled: true,
                    plugins: [
                        { ptype: 'localization', method: 'setText', key: 'login.submit' }
                    ]
                }]
            }]
        }]
    }
})