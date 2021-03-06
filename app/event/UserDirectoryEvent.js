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
 * Event to perform various UserDirectory CRUD operations
 */
Ext.define('ExtJSCodeSample.event.UserDirectoryEvent', {
    requires: 'ExtJSCodeSample.model.dto.UserDTO',

    statics: {
        /**
         * Dispatch to persist a new user to the server
         *
         * @event
         */
        CREATE_USER: 'ExtJSCodeSample.event.UserDirectoryEvent.CREATE_USER',

        /**
         * Dispatch to retrieve a collection of UserDTO's from the server
         *
         * @event
         */
        READ_USERS: 'ExtJSCodeSample.event.UserDirectoryEvent.READ_USERS',

        /**
         * Dispatch to persist an updated user to the server
         *
         * @event
         */
        UPDATE_USER: 'ExtJSCodeSample.event.UserDirectoryEvent.UPDATE_USER',

        /**
         * Dispatch to delete a user server side
         *
         * @event
         */
        DELETE_USER: 'ExtJSCodeSample.event.UserDirectoryEvent.DELETE_USER'
    },

    /**
     * @private
     * {ExtJSCodeSample.model.dto.UserDTO} user - User to use for said CRUD operation
     */
    user: {},

    /**
     * Getter method for user
     *
     * @return {ExtJSCodeSample.model.dto.UserDTO}
     */
    getUser: function() {
        return this.user
    },

    /**
     * @param {ExtJSCodeSample.model.dto.UserDTO} user
     */
    constructor: function(user)
    {
        this.user = user;
    }
});
