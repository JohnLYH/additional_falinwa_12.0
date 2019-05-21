/**********************************************************************************
* 
*    Copyright (C) 2017 MuK IT GmbH
*
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU Affero General Public License as
*    published by the Free Software Foundation, either version 3 of the
*    License, or (at your option) any later version.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU Affero General Public License for more details.
*
*    You should have received a copy of the GNU Affero General Public License
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
**********************************************************************************/

odoo.define('muk_web_searchpanel.KanbanRenderer', function (require) {
"use strict";

var core = require('web.core');
var config = require('web.config');
var session = require('web.session');

var KanbanRenderer = require('web.KanbanRenderer');

var _t = core._t;
var QWeb = core.qweb;

KanbanRenderer.include({
	render: function () {
        return this._render();
    },
});

});