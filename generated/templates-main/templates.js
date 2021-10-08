angular.module('templates-main', ['app/client/templates/client.html', 'app/client/templates/connection.html', 'app/client/templates/connectionGroup.html', 'app/client/templates/file.html', 'app/client/templates/guacClient.html', 'app/client/templates/guacClientPanel.html', 'app/client/templates/guacFileBrowser.html', 'app/client/templates/guacFileTransfer.html', 'app/client/templates/guacFileTransferManager.html', 'app/client/templates/guacThumbnail.html', 'app/client/templates/guacViewport.html', 'app/clipboard/templates/guacClipboard.html', 'app/element/templates/blank.html', 'app/form/templates/checkboxField.html', 'app/form/templates/dateField.html', 'app/form/templates/emailField.html', 'app/form/templates/form.html', 'app/form/templates/formField.html', 'app/form/templates/guacInputColor.html', 'app/form/templates/languageField.html', 'app/form/templates/numberField.html', 'app/form/templates/passwordField.html', 'app/form/templates/redirectField.html', 'app/form/templates/selectField.html', 'app/form/templates/terminalColorSchemeField.html', 'app/form/templates/textAreaField.html', 'app/form/templates/textField.html', 'app/form/templates/timeField.html', 'app/form/templates/timeZoneField.html', 'app/groupList/templates/guacGroupList.html', 'app/groupList/templates/guacGroupListFilter.html', 'app/home/templates/connection.html', 'app/home/templates/connectionGroup.html', 'app/home/templates/guacRecentConnections.html', 'app/home/templates/home.html', 'app/list/templates/guacFilter.html', 'app/list/templates/guacPager.html', 'app/list/templates/guacUserItem.html', 'app/login/templates/login.html', 'app/manage/templates/connectionGroupPermission.html', 'app/manage/templates/connectionPermission.html', 'app/manage/templates/connectionPermissionEditor.html', 'app/manage/templates/dataSourceTabs.html', 'app/manage/templates/identifierSetEditor.html', 'app/manage/templates/locationChooser.html', 'app/manage/templates/locationChooserConnectionGroup.html', 'app/manage/templates/manageConnection.html', 'app/manage/templates/manageConnectionGroup.html', 'app/manage/templates/manageSharingProfile.html', 'app/manage/templates/manageUser.html', 'app/manage/templates/manageUserGroup.html', 'app/manage/templates/managementButtons.html', 'app/manage/templates/sharingProfilePermission.html', 'app/manage/templates/systemPermissionEditor.html', 'app/navigation/templates/guacMenu.html', 'app/navigation/templates/guacPageList.html', 'app/navigation/templates/guacSectionTabs.html', 'app/navigation/templates/guacUserMenu.html', 'app/notification/templates/guacNotification.html', 'app/osk/templates/guacOsk.html', 'app/settings/templates/connection.html', 'app/settings/templates/connectionGroup.html', 'app/settings/templates/newConnection.html', 'app/settings/templates/newConnectionGroup.html', 'app/settings/templates/newSharingProfile.html', 'app/settings/templates/settings.html', 'app/settings/templates/settingsConnectionHistory.html', 'app/settings/templates/settingsConnections.html', 'app/settings/templates/settingsPreferences.html', 'app/settings/templates/settingsSessions.html', 'app/settings/templates/settingsUserGroups.html', 'app/settings/templates/settingsUsers.html', 'app/settings/templates/sharingProfile.html', 'app/textInput/templates/guacKey.html', 'app/textInput/templates/guacTextInput.html']);

angular.module('app/client/templates/client.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/client/templates/client.html',
	"\n" +
	"<guac-viewport>\n" +
	"\n" +
	"    <!-- Client view -->\n" +
	"    <div class=\"client-view\">\n" +
	"        <div class=\"client-view-content\">\n" +
	"\n" +
	"            <!-- Central portion of view -->\n" +
	"            <div class=\"client-body\" guac-touch-drag=\"clientDrag\" guac-touch-pinch=\"clientPinch\">\n" +
	"\n" +
	"                <!-- Client for current connection -->\n" +
	"                <guac-client client=\"client\"></guac-client>\n" +
	"\n" +
	"                <!-- All other active connections -->\n" +
	"                <div id=\"other-connections\">\n" +
	"                    <guac-client-panel clients=\"otherClients\"></guac-client-panel>\n" +
	"                </div>\n" +
	"\n" +
	"            </div>\n" +
	"\n" +
	"            <!-- Bottom portion of view -->\n" +
	"            <div class=\"client-bottom\">\n" +
	"\n" +
	"                <!-- Text input -->\n" +
	"                <div class=\"text-input-container\" ng-if=\"showTextInput\">\n" +
	"                    <guac-text-input></guac-text-input>\n" +
	"                </div>\n" +
	"\n" +
	"                <!-- On-screen keyboard -->\n" +
	"                <div class=\"keyboard-container\" ng-if=\"showOSK\">\n" +
	"                    <guac-osk layout=\"'CLIENT.URL_OSK_LAYOUT' | translate\"></guac-osk>\n" +
	"                </div>\n" +
	"\n" +
	"            </div>\n" +
	"\n" +
	"        </div>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- File transfers -->\n" +
	"    <div id=\"file-transfer-dialog\" ng-show=\"hasTransfers()\">\n" +
	"        <guac-file-transfer-manager client=\"client\"></guac-file-transfer-manager>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Connection stability warning -->\n" +
	"    <div id=\"connection-warning\" ng-show=\"isConnectionUnstable()\">\n" +
	"        {{'CLIENT.TEXT_CLIENT_STATUS_UNSTABLE' | translate}}\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Menu -->\n" +
	"    <div class=\"menu\" ng-class=\"{open: menu.shown}\" id=\"guac-menu\">\n" +
	"        <div class=\"menu-content\" ng-if=\"menu.shown\">\n" +
	"\n" +
	"            <!-- Stationary header -->\n" +
	"            <div class=\"header\">\n" +
	"                <h2 ng-hide=\"rootConnectionGroups\">{{client.name}}</h2>\n" +
	"                <h2 class=\"connection-select-menu\" ng-show=\"rootConnectionGroups\">\n" +
	"                    <guac-menu menu-title=\"client.name\" interactive=\"true\">\n" +
	"                        <div class=\"all-connections\">\n" +
	"                            <guac-group-list-filter connection-groups=\"rootConnectionGroups\"\n" +
	"                                filtered-connection-groups=\"filteredRootConnectionGroups\"\n" +
	"                                placeholder=\"'CLIENT.FIELD_PLACEHOLDER_FILTER' | translate\"\n" +
	"                                connection-properties=\"filteredConnectionProperties\"\n" +
	"                                connection-group-properties=\"filteredConnectionGroupProperties\"></guac-group-list-filter>\n" +
	"                            <guac-group-list\n" +
	"                                connection-groups=\"filteredRootConnectionGroups\"\n" +
	"                                templates=\"{\n" +
	"                                    'connection'       : 'app/client/templates/connection.html',\n" +
	"                                    'connection-group' : 'app/client/templates/connectionGroup.html'\n" +
	"                                }\"\n" +
	"                                page-size=\"10\"></guac-group-list>\n" +
	"                        </div>\n" +
	"                    </guac-menu>\n" +
	"                </h2>\n" +
	"                <div class=\"share-menu\" ng-show=\"canShareConnection()\">\n" +
	"                    <guac-menu menu-title=\"'CLIENT.ACTION_SHARE' | translate\">\n" +
	"                        <ul ng-repeat=\"sharingProfile in sharingProfiles\">\n" +
	"                            <li><a ng-click=\"share(sharingProfile)\">{{sharingProfile.name}}</a></li>\n" +
	"                        </ul>\n" +
	"                    </guac-menu>\n" +
	"                </div>\n" +
	"                <guac-user-menu local-actions=\"clientMenuActions\"></guac-user-menu>\n" +
	"            </div>\n" +
	"\n" +
	"            <!-- Scrollable body -->\n" +
	"            <div class=\"menu-body\" guac-touch-drag=\"menuDrag\" guac-scroll=\"menu.scrollState\">\n" +
	"\n" +
	"                <!-- Connection sharing -->\n" +
	"                <div class=\"menu-section\" id=\"share-links\" ng-show=\"isShared()\">\n" +
	"                    <div class=\"content\">\n" +
	"                        <h3>{{'CLIENT.INFO_CONNECTION_SHARED' | translate}}</h3>\n" +
	"                        <p class=\"description\"\n" +
	"                           translate=\"CLIENT.HELP_SHARE_LINK\"\n" +
	"                           translate-values=\"{LINKS : getShareLinkCount()}\"></p>\n" +
	"                        <table>\n" +
	"                            <tr ng-repeat=\"link in client.shareLinks | toArray | orderBy: value.name\">\n" +
	"                                <th>{{link.value.name}}</th>\n" +
	"                                <td><a href=\"{{link.value.href}}\" target=\"_blank\">{{link.value.href}}</a></td>\n" +
	"                            </tr>\n" +
	"                        </table>\n" +
	"                    </div>\n" +
	"                </div>\n" +
	"\n" +
	"                <!-- Clipboard -->\n" +
	"                <div class=\"menu-section\" id=\"clipboard-settings\">\n" +
	"                    <h3>{{'CLIENT.SECTION_HEADER_CLIPBOARD' | translate}}</h3>\n" +
	"                    <div class=\"content\">\n" +
	"                        <p class=\"description\">{{'CLIENT.HELP_CLIPBOARD' | translate}}</p>\n" +
	"                        <guac-clipboard data=\"client.clipboardData\"></guac-clipboard>\n" +
	"                    </div>\n" +
	"                </div>\n" +
	"\n" +
	"                <!-- Devices -->\n" +
	"                <div class=\"menu-section\" id=\"devices\" ng-show=\"client.filesystems.length\">\n" +
	"                    <h3>{{'CLIENT.SECTION_HEADER_DEVICES' | translate}}</h3>\n" +
	"                    <div class=\"content\">\n" +
	"                        <div class=\"device filesystem\" ng-repeat=\"filesystem in client.filesystems\" ng-click=\"showFilesystemMenu(filesystem)\">\n" +
	"                            {{filesystem.name}}\n" +
	"                        </div>\n" +
	"                    </div>\n" +
	"                </div>\n" +
	"\n" +
	"                <!-- Connection parameters which may be modified while the connection is open -->\n" +
	"                <div class=\"menu-section connection-parameters\" id=\"connection-settings\" ng-show=\"client.protocol\">\n" +
	"                    <guac-form namespace=\"getProtocolNamespace(client.protocol)\"\n" +
	"                               content=\"client.forms\"\n" +
	"                               model=\"menu.connectionParameters\"\n" +
	"                               model-only=\"true\"></guac-form>\n" +
	"                </div>\n" +
	"\n" +
	"                <!-- Input method -->\n" +
	"                <div class=\"menu-section\" id=\"keyboard-settings\">\n" +
	"                    <h3>{{'CLIENT.SECTION_HEADER_INPUT_METHOD' | translate}}</h3>\n" +
	"                    <div class=\"content\">\n" +
	"\n" +
	"                        <!-- No IME -->\n" +
	"                        <div class=\"choice\">\n" +
	"                            <label><input id=\"ime-none\" name=\"input-method\" ng-change=\"closeMenu()\" ng-model=\"menu.inputMethod\" type=\"radio\" value=\"none\"/> {{'CLIENT.NAME_INPUT_METHOD_NONE' | translate}}</label>\n" +
	"                            <p class=\"caption\"><label for=\"ime-none\">{{'CLIENT.HELP_INPUT_METHOD_NONE' | translate}}</label></p>\n" +
	"                        </div>\n" +
	"\n" +
	"                        <!-- Text input -->\n" +
	"                        <div class=\"choice\">\n" +
	"                            <div class=\"figure\"><label for=\"ime-text\"><img src=\"images/settings/tablet-keys.png\" alt=\"\"/></label></div>\n" +
	"                            <label><input id=\"ime-text\" name=\"input-method\" ng-change=\"closeMenu()\" ng-model=\"menu.inputMethod\" type=\"radio\" value=\"text\"/> {{'CLIENT.NAME_INPUT_METHOD_TEXT' | translate}}</label>\n" +
	"                            <p class=\"caption\"><label for=\"ime-text\">{{'CLIENT.HELP_INPUT_METHOD_TEXT' | translate}} </label></p>\n" +
	"                        </div>\n" +
	"\n" +
	"                        <!-- Guac OSK -->\n" +
	"                        <div class=\"choice\">\n" +
	"                            <label><input id=\"ime-osk\" name=\"input-method\" ng-change=\"closeMenu()\" ng-model=\"menu.inputMethod\" type=\"radio\" value=\"osk\"/> {{'CLIENT.NAME_INPUT_METHOD_OSK' | translate}}</label>\n" +
	"                            <p class=\"caption\"><label for=\"ime-osk\">{{'CLIENT.HELP_INPUT_METHOD_OSK' | translate}}</label></p>\n" +
	"                        </div>\n" +
	"\n" +
	"                    </div>\n" +
	"                </div>\n" +
	"\n" +
	"                <!-- Mouse mode -->\n" +
	"                <div class=\"menu-section\" id=\"mouse-settings\">\n" +
	"                    <h3>{{'CLIENT.SECTION_HEADER_MOUSE_MODE' | translate}}</h3>\n" +
	"                    <div class=\"content\">\n" +
	"                        <p class=\"description\">{{'CLIENT.HELP_MOUSE_MODE' | translate}}</p>\n" +
	"\n" +
	"                        <!-- Touchscreen -->\n" +
	"                        <div class=\"choice\">\n" +
	"                            <input name=\"mouse-mode\" ng-change=\"closeMenu()\" ng-model=\"client.clientProperties.emulateAbsoluteMouse\" type=\"radio\" ng-value=\"true\" checked=\"checked\" id=\"absolute\"/>\n" +
	"                            <div class=\"figure\">\n" +
	"                                <label for=\"absolute\"><img src=\"images/settings/touchscreen.png\" alt=\"{{'CLIENT.NAME_MOUSE_MODE_ABSOLUTE' | translate}}\"/></label>\n" +
	"                                <p class=\"caption\"><label for=\"absolute\">{{'CLIENT.HELP_MOUSE_MODE_ABSOLUTE' | translate}}</label></p>\n" +
	"                            </div>\n" +
	"                        </div>\n" +
	"\n" +
	"                        <!-- Touchpad -->\n" +
	"                        <div class=\"choice\">\n" +
	"                            <input name=\"mouse-mode\" ng-change=\"closeMenu()\" ng-model=\"client.clientProperties.emulateAbsoluteMouse\" type=\"radio\" ng-value=\"false\" id=\"relative\"/>\n" +
	"                            <div class=\"figure\">\n" +
	"                                <label for=\"relative\"><img src=\"images/settings/touchpad.png\" alt=\"{{'CLIENT.NAME_MOUSE_MODE_RELATIVE' | translate}}\"/></label>\n" +
	"                                <p class=\"caption\"><label for=\"relative\">{{'CLIENT.HELP_MOUSE_MODE_RELATIVE' | translate}}</label></p>\n" +
	"                            </div>\n" +
	"                        </div>\n" +
	"\n" +
	"                    </div>\n" +
	"                </div>\n" +
	"\n" +
	"                <!-- Display options -->\n" +
	"                <div class=\"menu-section\" id=\"display-settings\">\n" +
	"                    <h3>{{'CLIENT.SECTION_HEADER_DISPLAY' | translate}}</h3>\n" +
	"                    <div class=\"content\">\n" +
	"                        <div id=\"zoom-settings\">\n" +
	"                            <div ng-click=\"zoomOut()\" id=\"zoom-out\"><img src=\"images/settings/zoom-out.png\" alt=\"-\"/></div>\n" +
	"                            <div class=\"zoom-ctrl\">\n" +
	"                                <input type=\"number\" class=\"zoom-ctrl\" guac-zoom-ctrl\n" +
	"                                        ng-model=\"client.clientProperties.scale\"\n" +
	"                                        ng-model-options=\"{ updateOn: 'blur submit' }\"\n" +
	"                                        ng-change=\"zoomSet()\" />%\n" +
	"                            </div>\n" +
	"                            <div ng-click=\"zoomIn()\" id=\"zoom-in\"><img src=\"images/settings/zoom-in.png\" alt=\"+\"/></div>\n" +
	"                        </div>\n" +
	"                        <div><label><input ng-model=\"menu.autoFit\" ng-change=\"changeAutoFit()\" ng-disabled=\"autoFitDisabled()\" type=\"checkbox\" id=\"auto-fit\"/> {{'CLIENT.TEXT_ZOOM_AUTO_FIT' | translate}}</label></div>\n" +
	"                    </div>\n" +
	"                </div>\n" +
	"\n" +
	"            </div>\n" +
	"\n" +
	"        </div>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Filesystem menu -->\n" +
	"    <div id=\"filesystem-menu\" class=\"menu\" ng-class=\"{open: isFilesystemMenuShown()}\">\n" +
	"        <div class=\"menu-content\">\n" +
	"\n" +
	"            <!-- Stationary header -->\n" +
	"            <div class=\"header\">\n" +
	"                <h2>{{filesystemMenuContents.name}}</h2>\n" +
	"                <button class=\"upload button\" guac-upload=\"uploadFiles\">{{'CLIENT.ACTION_UPLOAD_FILES' | translate}}</button>\n" +
	"                <button class=\"back\" ng-click=\"hideFilesystemMenu()\">{{'CLIENT.ACTION_NAVIGATE_BACK' | translate}}</button>\n" +
	"            </div>\n" +
	"\n" +
	"            <!-- Breadcrumbs -->\n" +
	"            <div class=\"header breadcrumbs\"><div\n" +
	"                    class=\"breadcrumb root\"\n" +
	"                    ng-click=\"changeDirectory(filesystemMenuContents, filesystemMenuContents.root)\"></div><div\n" +
	"                        class=\"breadcrumb\"\n" +
	"                        ng-repeat=\"file in getPath(filesystemMenuContents.currentDirectory)\"\n" +
	"                        ng-click=\"changeDirectory(filesystemMenuContents, file)\">{{file.name}}</div>\n" +
	"            </div>\n" +
	"\n" +
	"            <!-- Scrollable body -->\n" +
	"            <div class=\"menu-body\">\n" +
	"                <guac-file-browser client=\"client\" filesystem=\"filesystemMenuContents\"></guac-file-browser>\n" +
	"            </div>\n" +
	"\n" +
	"        </div>\n" +
	"    </div>\n" +
	"\n" +
	"</guac-viewport>");
}]);

angular.module('app/client/templates/connection.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/client/templates/connection.html',
	"<a class=\"connection\" ng-href=\"{{ item.getClientURL() }}\">\n" +
	"    <div class=\"icon type\" ng-class=\"item.protocol\"></div>\n" +
	"    <span class=\"name\">{{item.name}}</span>\n" +
	"</a>");
}]);

angular.module('app/client/templates/connectionGroup.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/client/templates/connectionGroup.html',
	"<a class=\"connection-group\" ng-href=\"{{ item.getClientURL() }}\">\n" +
	"    <div ng-show=\"item.balancing\" class=\"icon type balancer\"></div>\n" +
	"    <span class=\"name\">{{item.name}}</span>\n" +
	"</a>");
}]);

angular.module('app/client/templates/file.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/client/templates/file.html',
	"<div class=\"list-item\">\n" +
	"\n" +
	"    <!-- Filename and icon -->\n" +
	"    <div class=\"caption\">\n" +
	"        <div class=\"icon\"></div>\n" +
	"        {{::name}}\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/client/templates/guacClient.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/client/templates/guacClient.html',
	"<div class=\"main\" guac-resize=\"mainElementResized\">\n" +
	"\n" +
	"    <!-- Display -->\n" +
	"    <div class=\"displayOuter\">\n" +
	"\n" +
	"        <div class=\"displayMiddle\">\n" +
	"            <div class=\"display software-cursor\">\n" +
	"            </div>\n" +
	"        </div>\n" +
	"\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/client/templates/guacClientPanel.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/client/templates/guacClientPanel.html',
	"<div class=\"client-panel\"\n" +
	"     ng-class=\"{ 'has-clients': hasClients(), 'hidden' : panelHidden() }\">\n" +
	"\n" +
	"    <!-- Toggle panel visibility -->\n" +
	"    <div class=\"client-panel-handle\" ng-click=\"togglePanel()\"></div>\n" +
	"\n" +
	"    <!-- List of connection thumbnails -->\n" +
	"    <ul class=\"client-panel-connection-list\">\n" +
	"        <li ng-repeat=\"client in clients | toArray | orderBy: [ '-value.lastUsed', 'value.title' ]\"\n" +
	"            ng-class=\"{ 'needs-attention' : hasStatusUpdate(client.value) }\"\n" +
	"            ng-show=\"isManaged(client.value)\"\n" +
	"            class=\"client-panel-connection\">\n" +
	"\n" +
	"            <!-- Close connection -->\n" +
	"            <button class=\"close-other-connection\" ng-click=\"disconnect(client.value)\">\n" +
	"                <img ng-attr-alt=\"{{ 'CLIENT.ACTION_DISCONNECT' | translate }}\"\n" +
	"                     ng-attr-title=\"{{ 'CLIENT.ACTION_DISCONNECT' | translate }}\"\n" +
	"                     src=\"images/x.png\">\n" +
	"            </button>\n" +
	"\n" +
	"            <!-- Thumbnail -->\n" +
	"            <a href=\"#/client/{{client.value.id}}\">\n" +
	"                <div class=\"thumbnail\">\n" +
	"                    <guac-thumbnail client=\"client.value\"></guac-thumbnail>\n" +
	"                </div>\n" +
	"                <div class=\"name\">{{ client.value.title }}</div>\n" +
	"            </a>\n" +
	"\n" +
	"        </li>\n" +
	"    </ul>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/client/templates/guacFileBrowser.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/client/templates/guacFileBrowser.html',
	"<div class=\"file-browser\">\n" +
	"\n" +
	"    <!-- Current directory contents -->\n" +
	"    <div class=\"current-directory-contents\"></div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/client/templates/guacFileTransfer.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/client/templates/guacFileTransfer.html',
	"<div class=\"transfer\" ng-class=\"{'in-progress': isInProgress(), 'savable': isSavable(), 'error': hasError()}\" ng-click=\"save()\">\n" +
	"\n" +
	"    <!-- Overall status of transfer -->\n" +
	"    <div class=\"transfer-status\">\n" +
	"\n" +
	"        <!-- Filename and progress bar -->\n" +
	"        <div class=\"filename\">\n" +
	"            <div class=\"progress\"><div ng-style=\"{'width': getPercentDone() + '%'}\" class=\"bar\"></div></div>\n" +
	"            {{transfer.filename}}\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- Error text -->\n" +
	"        <p class=\"error-text\">{{getErrorText() | translate}}</p>\n" +
	"\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Progress/status text -->\n" +
	"    <div class=\"text\"\n" +
	"         translate=\"CLIENT.TEXT_FILE_TRANSFER_PROGRESS\"\n" +
	"         translate-values=\"{PROGRESS: getProgressValue(), UNIT: getProgressUnit()}\"></div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/client/templates/guacFileTransferManager.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/client/templates/guacFileTransferManager.html',
	"<div class=\"transfer-manager\">\n" +
	"\n" +
	"    <!-- File transfer manager header -->\n" +
	"    <div class=\"header\">\n" +
	"        <h2>{{'CLIENT.SECTION_HEADER_FILE_TRANSFERS' | translate}}</h2>\n" +
	"        <button ng-click=\"clearCompletedTransfers()\">{{'CLIENT.ACTION_CLEAR_COMPLETED_TRANSFERS' | translate}}</button>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Sent/received files -->\n" +
	"    <div class=\"transfer-manager-body\">\n" +
	"        <div class=\"transfers\">\n" +
	"            <guac-file-transfer\n" +
	"                transfer=\"upload\"\n" +
	"                ng-repeat=\"upload in client.uploads\">\n" +
	"            </guac-file-transfer><guac-file-transfer\n" +
	"                transfer=\"download\"\n" +
	"                ng-repeat=\"download in client.downloads\">\n" +
	"            </guac-file-transfer>\n" +
	"        </div>\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/client/templates/guacThumbnail.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/client/templates/guacThumbnail.html',
	"<div class=\"thumbnail-main\" guac-resize=\"updateDisplayScale\">\n" +
	"\n" +
	"    <!-- Display -->\n" +
	"    <div class=\"display\">\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Dummy background thumbnail -->\n" +
	"    <img alt=\"\" ng-src=\"{{thumbnail}}\"/>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/client/templates/guacViewport.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/client/templates/guacViewport.html',
	"<div class=\"viewport\" ng-transclude>\n" +
	"</div>");
}]);

angular.module('app/clipboard/templates/guacClipboard.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/clipboard/templates/guacClipboard.html',
	"<textarea class=\"clipboard\"></textarea>");
}]);

angular.module('app/element/templates/blank.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/element/templates/blank.html',
	"<!DOCTYPE html>\n" +
	"<html>\n" +
	"    <head>\n" +
	"        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n" +
	"        <title>_</title>\n" +
	"    </head>\n" +
	"    <body></body>\n" +
	"</html>");
}]);

angular.module('app/form/templates/checkboxField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/checkboxField.html',
	"<input type=\"checkbox\"\n" +
	"       ng-attr-id=\"{{ fieldId }}\"\n" +
	"       ng-disabled=\"disabled\"\n" +
	"       ng-model=\"typedValue\"\n" +
	"       guac-focus=\"focused\"\n" +
	"       autocorrect=\"off\"\n" +
	"       autocapitalize=\"off\"/>");
}]);

angular.module('app/form/templates/dateField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/dateField.html',
	"<div class=\"date-field\">\n" +
	"    <input type=\"date\"\n" +
	"           ng-disabled=\"disabled\"\n" +
	"           ng-attr-id=\"{{ fieldId }}\"\n" +
	"           ng-model=\"typedValue\"\n" +
	"           ng-model-options=\"modelOptions\"\n" +
	"           guac-lenient-date\n" +
	"           guac-focus=\"focused\"\n" +
	"           placeholder=\"{{'FORM.FIELD_PLACEHOLDER_DATE' | translate}}\"\n" +
	"           autocorrect=\"off\"\n" +
	"           autocapitalize=\"off\"/>\n" +
	"</div>");
}]);

angular.module('app/form/templates/emailField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/emailField.html',
	"<div class=\"email-field\">\n" +
	"    <input type=\"email\"\n" +
	"           ng-disabled=\"disabled\"\n" +
	"           ng-attr-id=\"{{ fieldId }}\"\n" +
	"           ng-model=\"model\"\n" +
	"           ng-hide=\"readOnly\"\n" +
	"           guac-focus=\"focused\"\n" +
	"           autocorrect=\"off\"\n" +
	"           autocapitalize=\"off\"/>\n" +
	"    <a href=\"mailto:{{model}}\" ng-show=\"readOnly\">{{model}}</a>\n" +
	"</div>");
}]);

angular.module('app/form/templates/form.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/form.html',
	"<div class=\"form-group\">\n" +
	"    <div ng-repeat=\"form in forms\" class=\"form\"\n" +
	"         ng-show=\"containsVisible(form.fields)\">\n" +
	"\n" +
	"        <!-- Form name -->\n" +
	"        <h3 ng-show=\"form.name\">{{getSectionHeader(form) | translate}}</h3>\n" +
	"\n" +
	"        <!-- All fields in form -->\n" +
	"        <div class=\"fields\">\n" +
	"            <guac-form-field ng-repeat=\"field in form.fields\" namespace=\"namespace\"\n" +
	"                             ng-if=\"isVisible(field)\"\n" +
	"                             data-disabled=\"disabled\"\n" +
	"                             focused=\"isFocused(field)\"\n" +
	"                             field=\"field\"\n" +
	"                             model=\"values[field.name]\"></guac-form-field>\n" +
	"        </div>\n" +
	"\n" +
	"    </div>\n" +
	"</div>");
}]);

angular.module('app/form/templates/formField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/formField.html',
	"<div class=\"labeled-field\" ng-class=\"{empty: !model}\" ng-show=\"isFieldVisible()\">\n" +
	"\n" +
	"    <!-- Field header -->\n" +
	"    <div class=\"field-header\">\n" +
	"        <label ng-attr-for=\"{{ fieldId }}\">{{getFieldHeader() | translate}}</label>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Field content -->\n" +
	"    <div class=\"form-field\"></div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/form/templates/guacInputColor.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/guacInputColor.html',
	"<div class=\"guac-input-color\"\n" +
	"     ng-class=\"{\n" +
	"         'dark' : isDark(),\n" +
	"         'read-only' : !isColorPickerAvailable()\n" +
	"     }\"\n" +
	"     ng-click=\"selectColor()\"\n" +
	"     ng-style=\"{\n" +
	"        'background-color' : model\n" +
	"     }\">\n" +
	"    <ng-transclude></ng-transclude>\n" +
	"</div>");
}]);

angular.module('app/form/templates/languageField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/languageField.html',
	"<select guac-focus=\"focused\"\n" +
	"        ng-attr-id=\"{{ fieldId }}\"\n" +
	"        ng-model=\"model\"\n" +
	"        ng-options=\"language.key as language.value for language in languages | toArray | orderBy: key\"></select>");
}]);

angular.module('app/form/templates/numberField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/numberField.html',
	"<input type=\"number\"\n" +
	"       ng-disabled=\"disabled\"\n" +
	"       ng-attr-id=\"{{ fieldId }}\"\n" +
	"       ng-model=\"typedValue\"\n" +
	"       guac-focus=\"focused\"\n" +
	"       autocorrect=\"off\"\n" +
	"       autocapitalize=\"off\"/>");
}]);

angular.module('app/form/templates/passwordField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/passwordField.html',
	"<div class=\"password-field\">\n" +
	"    <input type=\"{{passwordInputType}}\"\n" +
	"           ng-disabled=\"disabled\"\n" +
	"           ng-attr-id=\"{{ fieldId }}\"\n" +
	"           ng-model=\"model\"\n" +
	"           ng-trim=\"false\"\n" +
	"           guac-focus=\"focused\"\n" +
	"           autocorrect=\"off\"\n" +
	"           autocapitalize=\"off\"/>\n" +
	"    <div class=\"icon toggle-password\" ng-click=\"togglePassword()\" title=\"{{getTogglePasswordHelpText() | translate}}\"></div>\n" +
	"</div>");
}]);

angular.module('app/form/templates/redirectField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/redirectField.html',
	"<div class=\"redirect-field-container\">\n" +
	"    <div class=\"redirect-field\">\n" +
	"        <p ng-show=\"field.translatableMessage\"\n" +
	"           translate=\"{{field.translatableMessage.key}}\"\n" +
	"           translate-values=\"{{field.translatableMessage.variables}}\">\n" +
	"        </p>\n" +
	"    </div>\n" +
	"</div>");
}]);

angular.module('app/form/templates/selectField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/selectField.html',
	"<select ng-attr-id=\"{{ fieldId }}\"\n" +
	"        ng-disabled=\"disabled\"\n" +
	"        guac-focus=\"focused\"\n" +
	"        ng-model=\"model\"\n" +
	"        ng-options=\"option as getFieldOption(option) | translate for option in field.options | orderBy: value\"></select>");
}]);

angular.module('app/form/templates/terminalColorSchemeField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/terminalColorSchemeField.html',
	"<div class=\"terminal-color-scheme-field\" ng-class=\"{\n" +
	"        'custom-color-scheme-details-visible' : detailsShown,\n" +
	"        'custom-color-scheme-details-hidden' : !detailsShown\n" +
	"    }\">\n" +
	"\n" +
	"    <!-- Pre-defined color scheme options -->\n" +
	"    <select ng-attr-id=\"{{ fieldId }}\" ng-model=\"selectedColorScheme\">\n" +
	"        <option ng-repeat=\"option in field.options | orderBy: value\"\n" +
	"                ng-value=\"option\">{{ getFieldOption(option) | translate }}</option>\n" +
	"        <option value=\"custom\">{{ 'COLOR_SCHEME.FIELD_OPTION_CUSTOM' | translate }}</option>\n" +
	"    </select>\n" +
	"\n" +
	"    <!-- Custom color scheme -->\n" +
	"    <div class=\"custom-color-scheme\" ng-show=\"isCustom()\">\n" +
	"\n" +
	"        <!-- Default foreground color -->\n" +
	"        <div class=\"custom-color-scheme-section default-color foreground\">\n" +
	"            <guac-input-color model=\"customColorScheme.foreground\"\n" +
	"                              palette=\"defaultPalette\">\n" +
	"                {{ 'COLOR_SCHEME.FIELD_HEADER_FOREGROUND' | translate }}\n" +
	"            </guac-input-color>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- Default background color -->\n" +
	"        <div class=\"custom-color-scheme-section default-color background\">\n" +
	"            <guac-input-color model=\"customColorScheme.background\"\n" +
	"                              palette=\"defaultPalette\">\n" +
	"                {{ 'COLOR_SCHEME.FIELD_HEADER_BACKGROUND' | translate }}\n" +
	"            </guac-input-color>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- Low intensity portion of 16-color palette -->\n" +
	"        <div class=\"custom-color-scheme-section palette low-intensity\">\n" +
	"            <guac-input-color ng-repeat=\"index in lowIntensity\"\n" +
	"                              model=\"customColorScheme.colors[index]\"\n" +
	"                              palette=\"defaultPalette\">\n" +
	"                {{ index }}\n" +
	"            </guac-input-color>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- High intensity portion of 16-color palette -->\n" +
	"        <div class=\"custom-color-scheme-section palette high-intensity\">\n" +
	"            <guac-input-color ng-repeat=\"index in highIntensity\"\n" +
	"                              model=\"customColorScheme.colors[index]\"\n" +
	"                              palette=\"defaultPalette\">\n" +
	"                {{ index }}\n" +
	"            </guac-input-color>\n" +
	"        </div>\n" +
	"\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Show/hide details -->\n" +
	"    <h4 class=\"custom-color-scheme-details-header\" ng-show=\"isCustom()\">\n" +
	"        {{'COLOR_SCHEME.SECTION_HEADER_DETAILS' | translate}}\n" +
	"        <a class=\"custom-color-scheme-show-details\" ng-click=\"showDetails()\">{{'COLOR_SCHEME.ACTION_SHOW_DETAILS' | translate}}</a>\n" +
	"        <a class=\"custom-color-scheme-hide-details\" ng-click=\"hideDetails()\">{{'COLOR_SCHEME.ACTION_HIDE_DETAILS' | translate}}</a>\n" +
	"    </h4>\n" +
	"\n" +
	"    <!-- Custom color scheme details (internal representation -->\n" +
	"    <textarea class=\"custom-color-scheme-details\" spellcheck=\"false\"\n" +
	"              ng-model=\"model\" ng-show=\"isCustom()\"></textarea>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/form/templates/textAreaField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/textAreaField.html',
	"<textarea ng-attr-id=\"{{ fieldId }}\"\n" +
	"          ng-model=\"model\"\n" +
	"          ng-disabled=\"disabled\"\n" +
	"          guac-focus=\"focused\"\n" +
	"          autocorrect=\"off\"\n" +
	"          autocapitalize=\"off\"></textarea>");
}]);

angular.module('app/form/templates/textField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/textField.html',
	"<div class=\"text-field\">\n" +
	"    <input type=\"text\"\n" +
	"           ng-attr-id=\"{{ fieldId }}\"\n" +
	"           ng-attr-list=\"{{ dataListId }}\"\n" +
	"           ng-model=\"model\"\n" +
	"           ng-disabled=\"disabled\"\n" +
	"           guac-focus=\"focused\"\n" +
	"           autocorrect=\"off\"\n" +
	"           autocapitalize=\"off\"/>\n" +
	"    <datalist ng-if=\"dataListId\" ng-attr-id=\"{{ dataListId }}\">\n" +
	"        <option ng-repeat=\"option in field.options | orderBy: option\"\n" +
	"                value=\"{{ option }}\">{{ getFieldOption(option) | translate }}</option>\n" +
	"    </datalist>\n" +
	"</div>");
}]);

angular.module('app/form/templates/timeField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/timeField.html',
	"<div class=\"time-field\">\n" +
	"    <input type=\"time\"\n" +
	"           ng-disabled=\"disabled\"\n" +
	"           ng-attr-id=\"{{ fieldId }}\"\n" +
	"           ng-model=\"typedValue\"\n" +
	"           ng-model-options=\"modelOptions\"\n" +
	"           guac-focus=\"focused\"\n" +
	"           guac-lenient-time\n" +
	"           placeholder=\"{{'FORM.FIELD_PLACEHOLDER_TIME' | translate}}\"\n" +
	"           autocorrect=\"off\"\n" +
	"           autocapitalize=\"off\"/>\n" +
	"</div>");
}]);

angular.module('app/form/templates/timeZoneField.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/form/templates/timeZoneField.html',
	"<div class=\"time-zone-field\">\n" +
	"\n" +
	"    <!-- Available time zone regions -->\n" +
	"    <select class=\"time-zone-region\"\n" +
	"            ng-disabled=\"disabled\"\n" +
	"            guac-focus=\"focused\"\n" +
	"            ng-attr-id=\"{{ fieldId }}\"\n" +
	"            ng-model=\"region\"\n" +
	"            ng-options=\"name for name in regions | orderBy: name\"></select>\n" +
	"\n" +
	"    <!-- Time zones within selected region -->\n" +
	"    <select class=\"time-zone\"\n" +
	"            ng-disabled=\"disabled || !region\"\n" +
	"            ng-model=\"model\"\n" +
	"            ng-options=\"timeZone.value as timeZone.key for timeZone in timeZones[region] | toArray | orderBy: key\"></select>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/groupList/templates/guacGroupList.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/groupList/templates/guacGroupList.html',
	"<div class=\"group-list\">\n" +
	"\n" +
	"    <script type=\"text/ng-template\" id=\"nestedItem.html\">\n" +
	"        <div class=\"{{item.type}}\" ng-if=\"isVisible(item.type)\"\n" +
	"            ng-class=\"{\n" +
	"                balancer   : item.balancing,\n" +
	"                expanded   : item.expanded,\n" +
	"                expandable : item.expandable,\n" +
	"                empty      : !item.children.length\n" +
	"            }\">\n" +
	"\n" +
	"            <!-- Item caption -->\n" +
	"            <div class=\"caption\">\n" +
	"\n" +
	"                <!-- Expand/collapse icon -->\n" +
	"                <div class=\"icon expand\" ng-click=\"toggleExpanded(item)\"\n" +
	"                    ng-if=\"item.expandable\"></div>\n" +
	"\n" +
	"                <ng-include src=\"templates[item.type]\"/>\n" +
	"\n" +
	"            </div>\n" +
	"\n" +
	"            <!-- Children of item (if any) -->\n" +
	"            <div class=\"children\" ng-if=\"item.expanded\">\n" +
	"                <div class=\"list-item\" ng-repeat=\"item in item.children | orderBy : 'name'\"\n" +
	"                    ng-include=\"'nestedItem.html'\"></div>\n" +
	"            </div>\n" +
	"\n" +
	"        </div>\n" +
	"    </script>\n" +
	"\n" +
	"    <!-- Root-level connections / groups -->\n" +
	"    <div class=\"group-list-page\">\n" +
	"        <div class=\"list-item\" ng-repeat=\"item in childrenPage\" ng-include=\"'nestedItem.html'\"></div>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Pager for connections / groups -->\n" +
	"    <guac-pager page=\"childrenPage\" items=\"rootItems | orderBy : ['weight', 'name']\"\n" +
	"                page-size=\"pageSize\"></guac-pager>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/groupList/templates/guacGroupListFilter.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/groupList/templates/guacGroupListFilter.html',
	"<div class=\"group-list-filter filter\">\n" +
	"\n" +
	"    <!-- Filter string -->\n" +
	"    <input class=\"search-string\" placeholder=\"{{placeholder()}}\" type=\"text\" ng-model=\"searchString\"/>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/home/templates/connection.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/home/templates/connection.html',
	"<a class=\"home-connection\"\n" +
	"   ng-href=\"{{ item.getClientURL() }}\"\n" +
	"   ng-class=\"{active: item.getActiveConnections()}\">\n" +
	"\n" +
	"    <!-- Connection icon -->\n" +
	"    <div class=\"icon type\" ng-class=\"item.protocol\"></div>\n" +
	"\n" +
	"    <!-- Connection name -->\n" +
	"    <span class=\"name\">{{item.name}}</span>\n" +
	"\n" +
	"    <!-- Active user count -->\n" +
	"    <span class=\"activeUserCount\" ng-show=\"item.getActiveConnections()\"\n" +
	"        translate=\"HOME.INFO_ACTIVE_USER_COUNT\"\n" +
	"        translate-values=\"{USERS: item.getActiveConnections()}\"></span>\n" +
	"\n" +
	"</a>");
}]);

angular.module('app/home/templates/connectionGroup.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/home/templates/connectionGroup.html',
	"<a class=\"home-connection-group\"\n" +
	"   ng-href=\"{{ item.getClientURL() }}\">\n" +
	"\n" +
	"    <!-- Connection group icon -->\n" +
	"    <div ng-show=\"item.balancing\" class=\"icon type balancer\"></div>\n" +
	"\n" +
	"    <!-- Connection group name -->\n" +
	"    <span class=\"name\">{{item.name}}</span>\n" +
	"\n" +
	"</a>");
}]);

angular.module('app/home/templates/guacRecentConnections.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/home/templates/guacRecentConnections.html',
	"<div>\n" +
	"\n" +
	"    <!-- Text displayed if no recent connections exist -->\n" +
	"    <p class=\"placeholder\" ng-hide=\"hasRecentConnections()\">{{'HOME.INFO_NO_RECENT_CONNECTIONS' | translate}}</p>\n" +
	"\n" +
	"    <!-- All active connections -->\n" +
	"    <div ng-repeat=\"activeConnection in activeConnections\" class=\"connection\">\n" +
	"        <a href=\"#/client/{{activeConnection.client.id}}\">\n" +
	"\n" +
	"            <!-- Connection thumbnail -->\n" +
	"            <div class=\"thumbnail\">\n" +
	"                <guac-thumbnail client=\"activeConnection.client\"></guac-thumbnail>\n" +
	"            </div>\n" +
	"\n" +
	"            <!-- Connection name -->\n" +
	"            <div class=\"caption\">\n" +
	"                <span class=\"name\">{{activeConnection.name}}</span>\n" +
	"            </div>\n" +
	"\n" +
	"        </a>\n" +
	"    </div>\n" +
	"    \n" +
	"    <!-- All recent connections -->\n" +
	"    <div ng-repeat=\"recentConnection in recentConnections\" class=\"connection\">\n" +
	"        <a href=\"#/client/{{recentConnection.entry.id}}\">\n" +
	"\n" +
	"            <!-- Connection thumbnail -->\n" +
	"            <div class=\"thumbnail\">\n" +
	"                <img alt=\"{{recentConnection.name}}\" ng-src=\"{{recentConnection.entry.thumbnail}}\"/>\n" +
	"            </div>\n" +
	"\n" +
	"            <!-- Connection name -->\n" +
	"            <div class=\"caption\">\n" +
	"                <span class=\"name\">{{recentConnection.name}}</span>\n" +
	"            </div>\n" +
	"\n" +
	"        </a>\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/home/templates/home.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/home/templates/home.html',
	"\n" +
	"<div class=\"view\" ng-class=\"{loading: !isLoaded()}\">\n" +
	"\n" +
	"    <div class=\"connection-list-ui\">\n" +
	"\n" +
	"        <!-- The recent connections for this user -->\n" +
	"        <div class=\"header\">\n" +
	"            <h2>{{'HOME.SECTION_HEADER_RECENT_CONNECTIONS' | translate}}</h2>\n" +
	"            <guac-user-menu></guac-user-menu>\n" +
	"        </div>\n" +
	"        <div class=\"recent-connections\">\n" +
	"            <guac-recent-connections root-groups=\"rootConnectionGroups\"></guac-recent-connections>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- All connections for this user -->\n" +
	"        <div class=\"header\">\n" +
	"            <h2>{{'HOME.SECTION_HEADER_ALL_CONNECTIONS' | translate}}</h2>\n" +
	"            <guac-group-list-filter connection-groups=\"rootConnectionGroups\"\n" +
	"                filtered-connection-groups=\"filteredRootConnectionGroups\"\n" +
	"                placeholder=\"'HOME.FIELD_PLACEHOLDER_FILTER' | translate\"\n" +
	"                connection-properties=\"filteredConnectionProperties\"\n" +
	"                connection-group-properties=\"filteredConnectionGroupProperties\"></guac-group-list-filter>\n" +
	"        </div>\n" +
	"        <div class=\"all-connections\">\n" +
	"            <guac-group-list\n" +
	"                connection-groups=\"filteredRootConnectionGroups\"\n" +
	"                templates=\"{\n" +
	"                    'connection'       : 'app/home/templates/connection.html',\n" +
	"                    'connection-group' : 'app/home/templates/connectionGroup.html'\n" +
	"                }\"\n" +
	"                page-size=\"20\"></guac-group-list>\n" +
	"        </div>\n" +
	"\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/list/templates/guacFilter.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/list/templates/guacFilter.html',
	"<div class=\"filter\">\n" +
	"\n" +
	"    <!-- Filter string -->\n" +
	"    <input class=\"search-string\" placeholder=\"{{placeholder()}}\" type=\"text\" ng-model=\"searchString\"/>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/list/templates/guacPager.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/list/templates/guacPager.html',
	"<div class=\"pager\" ng-show=\"pageNumbers.length > 1\">\n" +
	"\n" +
	"    <!-- First / Previous -->\n" +
	"    <div class=\"first-page icon\" ng-class=\"{disabled: !canSelectPage(firstPage)}\"    ng-click=\"selectPage(firstPage)\"/>\n" +
	"    <div class=\"prev-page icon\"  ng-class=\"{disabled: !canSelectPage(previousPage)}\" ng-click=\"selectPage(previousPage)\"/>\n" +
	"\n" +
	"    <!-- Indicator of the existence of pages before the first page number shown -->\n" +
	"    <div class=\"more-pages\" ng-show=\"hasMorePagesBefore()\">...</div>\n" +
	"    \n" +
	"    <!-- Page numbers -->\n" +
	"    <ul class=\"page-numbers\">\n" +
	"        <li class=\"set-page\"\n" +
	"            ng-class=\"{current: isSelected(pageNumber)}\"\n" +
	"            ng-repeat=\"pageNumber in pageNumbers\"\n" +
	"            ng-click=\"selectPage(pageNumber)\">{{pageNumber}}</li>\n" +
	"    </ul>\n" +
	"\n" +
	"    <!-- Indicator of the existence of pages beyond the last page number shown -->\n" +
	"    <div class=\"more-pages\" ng-show=\"hasMorePagesAfter()\">...</div>\n" +
	"\n" +
	"    <!-- Next / Last -->\n" +
	"    <div class=\"next-page icon\" ng-class=\"{disabled: !canSelectPage(nextPage)}\" ng-click=\"selectPage(nextPage)\"/>\n" +
	"    <div class=\"last-page icon\" ng-class=\"{disabled: !canSelectPage(lastPage)}\" ng-click=\"selectPage(lastPage)\"/>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/list/templates/guacUserItem.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/list/templates/guacUserItem.html',
	"<div class=\"user-item\" ng-class=\"{'anonymous' : isAnonymous() }\">\n" +
	"    <span class=\"username\">{{displayName}}</span>\n" +
	"</div>");
}]);

angular.module('app/login/templates/login.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/login/templates/login.html',
	"<div class=\"login-ui\" ng-class=\"{error: loginError, continuation: isContinuation(), initial: !isContinuation()}\" >\n" +
	"\n" +
	"    <!-- Login error message -->\n" +
	"    <p class=\"login-error\" translate=\"{{loginError.key}}\"\n" +
	"       translate-values=\"{{loginError.variables}}\"></p>\n" +
	"\n" +
	"    <div class=\"login-dialog-middle\">\n" +
	"\n" +
	"        <div class=\"login-dialog\">\n" +
	"\n" +
	"            <form class=\"login-form\" ng-submit=\"login()\">\n" +
	"\n" +
	"                <!-- Guacamole version -->\n" +
	"                <div class=\"logo\"></div>\n" +
	"                <div class=\"version\">\n" +
	// "                    <div class=\"app-name\">{{'APP.NAME' | translate}}</div>\n" +
	"                    <div class=\"version-number\">{{'APP.VERSION' | translate}}</div>\n" +
	"                </div>\n" +
	"\n" +
	"                <!-- Login message/instructions -->\n" +
	"                <p ng-show=\"helpText\" translate=\"{{helpText.key}}\"\n" +
	"                   translate-values=\"{{helpText.variables}}\"></p>\n" +
	"\n" +
	"                <!-- Login fields -->\n" +
	"                <div class=\"login-fields\">\n" +
	"                    <guac-form\n" +
	"                        namespace=\"'LOGIN'\"\n" +
	"                        content=\"remainingFields\"\n" +
	"                        model=\"enteredValues\"\n" +
	"                        focused=\"relevantField.name\"\n" +
	"                        data-disabled=\"submitted\"></guac-form>\n" +
	"                </div>\n" +
	"\n" +
	"                <!-- Login/continue button -->\n" +
	"                <div class=\"buttons\">\n" +
	"\n" +
	"                    <input type=\"submit\" name=\"login\" class=\"login\"\n" +
	"                           ng-disabled=\"submitted\"\n" +
	"                           value=\"{{'LOGIN.ACTION_LOGIN' | translate}}\"/>\n" +
	"\n" +
	"                    <input type=\"submit\" name=\"login\" class=\"continue-login\"\n" +
	"                           ng-disabled=\"submitted\"\n" +
	"                           value=\"{{'LOGIN.ACTION_CONTINUE' | translate}}\"/>\n" +
	"\n" +
	"                </div>\n" +
	"\n" +
	"            </form>\n" +
	"\n" +
	"        </div>\n" +
	"\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/manage/templates/connectionGroupPermission.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/connectionGroupPermission.html',
	"<div class=\"choice\">\n" +
	"\n" +
	"    <!-- Connection group icon -->\n" +
	"    <div class=\"icon type\"></div>\n" +
	"\n" +
	"    <!-- Permission checkbox -->\n" +
	"    <input type=\"checkbox\" ng-model=\"context.getPermissionFlags().connectionGroupPermissions.READ[item.identifier]\"\n" +
	"                           ng-change=\"context.connectionGroupPermissionChanged(item.identifier)\"/>\n" +
	"\n" +
	"    <!-- Connection group name -->\n" +
	"    <span class=\"name\">{{item.name}}</span>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/manage/templates/connectionPermission.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/connectionPermission.html',
	"<div class=\"choice\">\n" +
	"\n" +
	"    <!-- Connection icon -->\n" +
	"    <div class=\"icon type\" ng-class=\"item.protocol\"></div>\n" +
	"\n" +
	"    <!-- Permission checkbox -->\n" +
	"    <input type=\"checkbox\" ng-model=\"context.getPermissionFlags().connectionPermissions.READ[item.identifier]\"\n" +
	"                           ng-change=\"context.connectionPermissionChanged(item.identifier)\"/>\n" +
	"\n" +
	"    <!-- Connection name -->\n" +
	"    <span class=\"name\">{{item.name}}</span>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/manage/templates/connectionPermissionEditor.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/connectionPermissionEditor.html',
	"<div class=\"connection-permissions\">\n" +
	"    <div class=\"header tabbed\">\n" +
	"        <h2>{{'MANAGE_USER.SECTION_HEADER_CONNECTIONS' | translate}}</h2>\n" +
	"        <guac-group-list-filter connection-groups=\"getRootGroups()\"\n" +
	"            filtered-connection-groups=\"filteredRootGroups\"\n" +
	"            placeholder=\"'MANAGE_USER.FIELD_PLACEHOLDER_FILTER' | translate\"\n" +
	"            connection-properties=\"filteredConnectionProperties\"\n" +
	"            connection-group-properties=\"filteredConnectionGroupProperties\"></guac-group-list-filter>\n" +
	"    </div>\n" +
	"    <guac-section-tabs namespace=\"MANAGE_USER\" current=\"currentTab\" tabs=\"tabs\"></guac-section-tabs>\n" +
	"    <div class=\"section\">\n" +
	"        <guac-group-list\n" +
	"            context=\"groupListContext\"\n" +
	"            connection-groups=\"filteredRootGroups\"\n" +
	"            templates=\"{\n" +
	"                'connection'       : 'app/manage/templates/connectionPermission.html',\n" +
	"                'sharing-profile'  : 'app/manage/templates/sharingProfilePermission.html',\n" +
	"                'connection-group' : 'app/manage/templates/connectionGroupPermission.html'\n" +
	"            }\"\n" +
	"            page-size=\"20\"></guac-group-list>\n" +
	"    </div>\n" +
	"</div>");
}]);

angular.module('app/manage/templates/dataSourceTabs.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/dataSourceTabs.html',
	"<div class=\"page-tabs\">\n" +
	"    <guac-page-list pages=\"pages\"></guac-page-list>\n" +
	"</div>");
}]);

angular.module('app/manage/templates/identifierSetEditor.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/identifierSetEditor.html',
	"<div class=\"related-objects\" ng-hide=\"isEmpty()\">\n" +
	"    <div class=\"header\">\n" +
	"        <h2>{{ header | translate }}</h2>\n" +
	"        <div class=\"filter\">\n" +
	"            <input class=\"search-string\" type=\"text\"\n" +
	"                   placeholder=\"{{ 'SETTINGS_USERS.FIELD_PLACEHOLDER_FILTER' | translate }}\"\n" +
	"                   ng-model=\"filterString\"/>\n" +
	"        </div>\n" +
	"    </div>\n" +
	"\n" +
	"    <div class=\"section\">\n" +
	"\n" +
	"        <!-- Abbreviated list of only the currently selected objects -->\n" +
	"        <div class=\"abbreviated-related-objects\">\n" +
	"            <img src=\"images/arrows/right.png\" alt=\"Expand\" class=\"expand\" ng-hide=\"expanded\" ng-click=\"expand()\"/>\n" +
	"            <img src=\"images/arrows/down.png\" alt=\"Collapse\" class=\"collapse\" ng-show=\"expanded\" ng-click=\"collapse()\"/>\n" +
	"            <p ng-hide=\"identifiers.length\" class=\"no-related-objects\">{{ emptyPlaceholder | translate }}</p>\n" +
	"            <ul>\n" +
	"                <li ng-repeat=\"identifier in identifiers | filter: filterString\">\n" +
	"                    <label><img src=\"images/x-red.png\" alt=\"Remove\" class=\"remove\"\n" +
	"                                ng-click=\"removeIdentifier(identifier)\"\n" +
	"                                ng-show=\"isEditable[identifier]\"/><span class=\"identifier\">{{ identifier }}</span>\n" +
	"                    </label>\n" +
	"                </li>\n" +
	"            </ul>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- Exhaustive, paginated list of all objects -->\n" +
	"        <div class=\"all-related-objects\" ng-show=\"expanded\">\n" +
	"            <p ng-hide=\"identifiersAvailablePage.length\" class=\"no-objects-available\">{{ unavailablePlaceholder | translate }}</p>\n" +
	"            <ul>\n" +
	"                <li ng-repeat=\"identifier in identifiersAvailablePage\">\n" +
	"                    <label><input type=\"checkbox\"\n" +
	"                           ng-model=\"identifierFlags[identifier]\"\n" +
	"                           ng-change=\"identifierChanged(identifier)\"/>\n" +
	"                        <span class=\"identifier\">{{ identifier }}</span>\n" +
	"                    </label>\n" +
	"                </li>\n" +
	"            </ul>\n" +
	"\n" +
	"            <!-- Pager controls for user list -->\n" +
	"            <guac-pager page=\"identifiersAvailablePage\" page-size=\"25\"\n" +
	"                        items=\"identifiersAvailable | orderBy | filter: filterString\"></guac-pager>\n" +
	"        </div>\n" +
	"\n" +
	"    </div>\n" +
	"</div>");
}]);

angular.module('app/manage/templates/locationChooser.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/locationChooser.html',
	"<div class=\"location-chooser\">\n" +
	"\n" +
	"    <!-- Chosen group name -->\n" +
	"    <div ng-click=\"toggleMenu()\" class=\"location\">{{chosenConnectionGroupName}}</div>\n" +
	"\n" +
	"    <!-- Dropdown hierarchical menu of groups -->\n" +
	"    <div ng-show=\"menuOpen\" class=\"dropdown\">\n" +
	"        <guac-group-list\n" +
	"            context=\"groupListContext\"\n" +
	"            show-root-group=\"true\"\n" +
	"            connection-groups=\"rootGroups\"\n" +
	"            templates=\"{\n" +
	"                'connection-group' : 'app/manage/templates/locationChooserConnectionGroup.html'\n" +
	"            }\"/>\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/manage/templates/locationChooserConnectionGroup.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/locationChooserConnectionGroup.html',
	"<span class=\"name\" ng-click=\"context.chooseGroup(item.wrappedItem)\">\n" +
	"\n" +
	"    {{item.name}}\n" +
	"</span>");
}]);

angular.module('app/manage/templates/manageConnection.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/manageConnection.html',
	"\n" +
	"<div class=\"view\" ng-class=\"{loading: !isLoaded()}\">\n" +
	"\n" +
	"    <!-- Main property editor -->\n" +
	"    <div class=\"header\">\n" +
	"        <h2>{{'MANAGE_CONNECTION.SECTION_HEADER_EDIT_CONNECTION' | translate}}</h2>\n" +
	"        <guac-user-menu></guac-user-menu>\n" +
	"    </div>\n" +
	"    <div class=\"section\">\n" +
	"        <table class=\"properties\">\n" +
	"            \n" +
	"            <!-- Edit connection name -->\n" +
	"            <tr>\n" +
	"                <th>{{'MANAGE_CONNECTION.FIELD_HEADER_NAME' | translate}}</th>\n" +
	"              \n" +
	"                <td><input type=\"text\" ng-model=\"connection.name\" autocorrect=\"off\" autocapitalize=\"off\"/></td>\n" +
	"            </tr>\n" +
	"            \n" +
	"            <!-- Edit connection location -->\n" +
	"            <tr>\n" +
	"                <th>{{'MANAGE_CONNECTION.FIELD_HEADER_LOCATION' | translate}}</th>\n" +
	"              \n" +
	"                <td>\n" +
	"                    <location-chooser\n" +
	"                        data-data-source=\"selectedDataSource\" root-group=\"rootGroup\"\n" +
	"                        value=\"connection.parentIdentifier\"></location-chooser>\n" +
	"                </td>\n" +
	"            </tr>\n" +
	"            \n" +
	"            \n" +
	"            <!-- Edit connection protocol -->\n" +
	"            <tr>\n" +
	"                <th>{{'MANAGE_CONNECTION.FIELD_HEADER_PROTOCOL' | translate}}</th>\n" +
	"                <td>\n" +
	"                    <select ng-model=\"connection.protocol\" ng-options=\"protocol.value.name as getProtocolName(protocol.value.name) | translate for protocol in protocols | toArray | orderBy: value.name\"></select>\n" +
	"                </td>\n" +
	"            </tr>\n" +
	"        </table>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Connection attributes section -->\n" +
	"    <div class=\"attributes\">\n" +
	"        <guac-form namespace=\"'CONNECTION_ATTRIBUTES'\" content=\"attributes\"\n" +
	"                   model=\"connection.attributes\" model-only=\"!managementPermissions.canChangeAllAttributes\"></guac-form>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Connection parameters -->\n" +
	"    <h2 class=\"header\">{{'MANAGE_CONNECTION.SECTION_HEADER_PARAMETERS' | translate}}</h2>\n" +
	"    <div class=\"section connection-parameters\" ng-class=\"{loading: !parameters}\">\n" +
	"        <guac-form namespace=\"getNamespace(connection.protocol)\"\n" +
	"                   content=\"protocols[connection.protocol].connectionForms\"\n" +
	"                   model=\"parameters\"></guac-form>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Form action buttons -->\n" +
	"    <management-buttons namespace=\"MANAGE_CONNECTION\"\n" +
	"          permissions=\"managementPermissions\"\n" +
	"          save=\"saveConnection()\"\n" +
	"          delete=\"deleteConnection()\"\n" +
	"          clone=\"cloneConnection()\"\n" +
	"          return=\"returnToConnectionList()\">\n" +
	"    </management-buttons>\n" +
	"\n" +
	"    <!-- Connection history -->\n" +
	"    <h2 class=\"header\">{{'MANAGE_CONNECTION.SECTION_HEADER_HISTORY' | translate}}</h2>\n" +
	"    <div class=\"history section\" ng-class=\"{loading: !historyEntryWrappers}\">\n" +
	"        <p ng-hide=\"historyEntryWrappers.length\">{{'MANAGE_CONNECTION.INFO_CONNECTION_NOT_USED' | translate}}</p>\n" +
	"\n" +
	"        <!-- History list -->\n" +
	"        <table ng-show=\"historyEntryWrappers.length\">\n" +
	"            <thead>\n" +
	"                <tr>\n" +
	"                    <th>{{'MANAGE_CONNECTION.TABLE_HEADER_HISTORY_USERNAME' | translate}}</th>\n" +
	"                    <th>{{'MANAGE_CONNECTION.TABLE_HEADER_HISTORY_START' | translate}}</th>\n" +
	"                    <th>{{'MANAGE_CONNECTION.TABLE_HEADER_HISTORY_DURATION' | translate}}</th>\n" +
	"                    <th>{{'MANAGE_CONNECTION.TABLE_HEADER_HISTORY_REMOTEHOST' | translate}}</th>\n" +
	"                </tr>\n" +
	"            </thead>\n" +
	"            <tbody>\n" +
	"                <tr ng-repeat=\"wrapper in wrapperPage\">\n" +
	"                    <td class=\"username\"><guac-user-item username=\"wrapper.entry.username\"></guac-user-item></td>\n" +
	"                    <td class=\"start\">{{wrapper.entry.startDate | date:historyDateFormat}}</td>\n" +
	"                    <td class=\"duration\"\n" +
	"                        translate=\"{{wrapper.durationText}}\"\n" +
	"                        translate-values=\"{VALUE: wrapper.duration.value, UNIT: wrapper.duration.unit}\"></td>\n" +
	"                    <td class=\"remoteHost\">{{wrapper.entry.remoteHost}}</td>\n" +
	"                </tr>\n" +
	"            </tbody>\n" +
	"        </table>\n" +
	"\n" +
	"        <!-- Pager controls for history list -->\n" +
	"        <guac-pager page=\"wrapperPage\" items=\"historyEntryWrappers\"></guac-pager>\n" +
	"\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/manage/templates/manageConnectionGroup.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/manageConnectionGroup.html',
	"\n" +
	"<div class=\"view\" ng-class=\"{loading: !isLoaded()}\">\n" +
	"\n" +
	"    <!-- Main property editor -->\n" +
	"    <div class=\"header\">\n" +
	"        <h2>{{'MANAGE_CONNECTION_GROUP.SECTION_HEADER_EDIT_CONNECTION_GROUP' | translate}}</h2>\n" +
	"        <guac-user-menu></guac-user-menu>\n" +
	"    </div>\n" +
	"    <div class=\"section\">\n" +
	"        <table class=\"properties\">\n" +
	"                        \n" +
	"            <!-- Edit connection group name -->\n" +
	"            <tr>\n" +
	"                <th>{{'MANAGE_CONNECTION_GROUP.FIELD_HEADER_NAME' | translate}}</th>\n" +
	"                          \n" +
	"                <td><input type=\"text\" ng-model=\"connectionGroup.name\" autocorrect=\"off\" autocapitalize=\"off\"/></td>\n" +
	"            </tr>\n" +
	"                        \n" +
	"            <!-- Edit connection group location -->\n" +
	"            <tr>\n" +
	"                <th>{{'MANAGE_CONNECTION_GROUP.FIELD_HEADER_LOCATION' | translate}}</th>\n" +
	"                          \n" +
	"                <td>\n" +
	"                    <location-chooser\n" +
	"                        data-data-source=\"selectedDataSource\" root-group=\"rootGroup\"\n" +
	"                        value=\"connectionGroup.parentIdentifier\"></location-chooser>\n" +
	"                </td>\n" +
	"            </tr>\n" +
	"                        \n" +
	"                        \n" +
	"            <!-- Edit connection group type -->\n" +
	"            <tr>\n" +
	"                <th>{{'MANAGE_CONNECTION_GROUP.FIELD_HEADER_TYPE' | translate}}</th>\n" +
	"                <td>\n" +
	"                    <select ng-model=\"connectionGroup.type\" ng-options=\"type.value as type.label | translate for type in types | orderBy: name\"></select>\n" +
	"                </td>\n" +
	"            </tr>\n" +
	"        </table>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Connection group attributes section -->\n" +
	"    <div class=\"attributes\">\n" +
	"        <guac-form namespace=\"'CONNECTION_GROUP_ATTRIBUTES'\" content=\"attributes\"\n" +
	"                   model=\"connectionGroup.attributes\" model-only=\"!managementPermissions.canChangeAllAttributes\"></guac-form>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Form action buttons -->\n" +
	"    <management-buttons namespace=\"MANAGE_CONNECTION_GROUP\"\n" +
	"          permissions=\"managementPermissions\"\n" +
	"          save=\"saveConnectionGroup()\"\n" +
	"          delete=\"deleteConnectionGroup()\"\n" +
	"          clone=\"cloneConnectionGroup()\"\n" +
	"          return=\"returnToConnectionList()\">\n" +
	"    </management-buttons>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/manage/templates/manageSharingProfile.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/manageSharingProfile.html',
	"<div class=\"view\" ng-class=\"{loading: !isLoaded()}\">\n" +
	"\n" +
	"    <!-- Main property editor -->\n" +
	"    <div class=\"header\">\n" +
	"        <h2>{{'MANAGE_SHARING_PROFILE.SECTION_HEADER_EDIT_SHARING_PROFILE' | translate}}</h2>\n" +
	"        <guac-user-menu></guac-user-menu>\n" +
	"    </div>\n" +
	"    <div class=\"section\">\n" +
	"        <table class=\"properties\">\n" +
	"            <tr>\n" +
	"                <th>{{'MANAGE_SHARING_PROFILE.FIELD_HEADER_NAME' | translate}}</th>\n" +
	"                <td><input type=\"text\" ng-model=\"sharingProfile.name\"\n" +
	"                           autocorrect=\"off\" autocapitalize=\"off\"/></td>\n" +
	"            </tr>\n" +
	"            <tr>\n" +
	"                <th>{{'MANAGE_SHARING_PROFILE.FIELD_HEADER_PRIMARY_CONNECTION' | translate}}</th>\n" +
	"                <td>{{primaryConnection.name}}</td>\n" +
	"            </tr>\n" +
	"        </table>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Sharing profile attributes section -->\n" +
	"    <div class=\"attributes\">\n" +
	"        <guac-form namespace=\"'SHARING_PROFILE_ATTRIBUTES'\" content=\"attributes\"\n" +
	"                   model=\"sharingProfile.attributes\" model-only=\"!managementPermissions.canChangeAllAttributes\"></guac-form>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Sharing profile parameters -->\n" +
	"    <h2 class=\"header\">{{'MANAGE_SHARING_PROFILE.SECTION_HEADER_PARAMETERS' | translate}}</h2>\n" +
	"    <div class=\"section connection-parameters\" ng-class=\"{loading: !parameters}\">\n" +
	"        <guac-form namespace=\"getNamespace(primaryConnection.protocol)\"\n" +
	"                   content=\"protocols[primaryConnection.protocol].sharingProfileForms\"\n" +
	"                   model=\"parameters\"></guac-form>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Form action buttons -->\n" +
	"    <management-buttons namespace=\"MANAGE_SHARING_PROFILE\"\n" +
	"          permissions=\"managementPermissions\"\n" +
	"          save=\"saveSharingProfile()\"\n" +
	"          delete=\"deleteSharingProfile()\"\n" +
	"          clone=\"cloneSharingProfile()\"\n" +
	"          return=\"returnToConnectionList()\">\n" +
	"    </management-buttons>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/manage/templates/manageUser.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/manageUser.html',
	"\n" +
	"<div class=\"manage-user view\" ng-class=\"{loading: !isLoaded()}\">\n" +
	"\n" +
	"    <!-- User header and data source tabs -->\n" +
	"    <div class=\"header tabbed\">\n" +
	"        <h2>{{'MANAGE_USER.SECTION_HEADER_EDIT_USER' | translate}}</h2>\n" +
	"        <guac-user-menu></guac-user-menu>\n" +
	"    </div>\n" +
	"    <data-data-source-tabs ng-hide=\"cloneSourceUsername\"\n" +
	"        permissions=\"managementPermissions\"\n" +
	"        url=\"getUserURL(dataSource)\">\n" +
	"    </data-data-source-tabs>\n" +
	"\n" +
	"    <!-- Warn if user is read-only -->\n" +
	"    <div class=\"section\" ng-hide=\"managementPermissions[dataSource].canSaveObject\">\n" +
	"        <p class=\"notice read-only\">{{'MANAGE_USER.INFO_READ_ONLY' | translate}}</p>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Sections applicable to non-read-only users -->\n" +
	"    <div ng-show=\"managementPermissions[dataSource].canSaveObject\">\n" +
	"\n" +
	"        <!-- User password section -->\n" +
	"        <div class=\"section\">\n" +
	"            <table class=\"properties\">\n" +
	"                <tr>\n" +
	"                    <th>{{'MANAGE_USER.FIELD_HEADER_USERNAME' | translate}}</th>\n" +
	"                    <td>\n" +
	"                        <input ng-show=\"canEditUsername()\" ng-model=\"user.username\" type=\"text\"/>\n" +
	"                        <span  ng-hide=\"canEditUsername()\">{{user.username}}</span>\n" +
	"                    </td>\n" +
	"                </tr>\n" +
	"                <tr>\n" +
	"                    <th>{{'MANAGE_USER.FIELD_HEADER_PASSWORD' | translate}}</th>\n" +
	"                    <td><input ng-model=\"user.password\" type=\"password\" /></td>\n" +
	"                </tr>\n" +
	"                <tr>\n" +
	"                    <th>{{'MANAGE_USER.FIELD_HEADER_PASSWORD_AGAIN' | translate}}</th>\n" +
	"                    <td><input ng-model=\"passwordMatch\" type=\"password\" /></td>\n" +
	"                </tr>\n" +
	"            </table>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- User attributes section -->\n" +
	"        <div class=\"attributes\" ng-show=\"managementPermissions[dataSource].canChangeAttributes\">\n" +
	"            <guac-form namespace=\"'USER_ATTRIBUTES'\" content=\"attributes\"\n" +
	"                       model=\"user.attributes\"\n" +
	"                       model-only=\"!managementPermissions[dataSource].canChangeAllAttributes\"></guac-form>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- System permissions section -->\n" +
	"        <system-permission-editor ng-show=\"managementPermissions[dataSource].canChangePermissions\"\n" +
	"              username=\"selfUsername\"\n" +
	"              data-data-source=\"dataSource\"\n" +
	"              permission-flags=\"permissionFlags\"\n" +
	"              permissions-added=\"permissionsAdded\"\n" +
	"              permissions-removed=\"permissionsRemoved\">\n" +
	"        </system-permission-editor>\n" +
	"\n" +
	"        <!-- Parent group section -->\n" +
	"        <identifier-set-editor\n" +
	"            header=\"MANAGE_USER.SECTION_HEADER_USER_GROUPS\"\n" +
	"            empty-placeholder=\"MANAGE_USER.HELP_NO_USER_GROUPS\"\n" +
	"            unavailable-placeholder=\"MANAGE_USER.INFO_NO_USER_GROUPS_AVAILABLE\"\n" +
	"            identifiers-available=\"availableGroups\"\n" +
	"            identifiers=\"parentGroups\"\n" +
	"            identifiers-added=\"parentGroupsAdded\"\n" +
	"            identifiers-removed=\"parentGroupsRemoved\">\n" +
	"        </identifier-set-editor>\n" +
	"\n" +
	"        <!-- Connection permissions section -->\n" +
	"        <connection-permission-editor ng-show=\"managementPermissions[dataSource].canChangePermissions\"\n" +
	"              data-data-source=\"dataSource\"\n" +
	"              permission-flags=\"permissionFlags\"\n" +
	"              permissions-added=\"permissionsAdded\"\n" +
	"              permissions-removed=\"permissionsRemoved\">\n" +
	"        </connection-permission-editor>\n" +
	"\n" +
	"        <!-- Form action buttons -->\n" +
	"        <management-buttons namespace=\"MANAGE_USER\"\n" +
	"              permissions=\"managementPermissions[dataSource]\"\n" +
	"              save=\"saveUser()\"\n" +
	"              delete=\"deleteUser()\"\n" +
	"              clone=\"cloneUser()\"\n" +
	"              return=\"returnToUserList()\">\n" +
	"        </management-buttons>\n" +
	"\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/manage/templates/manageUserGroup.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/manageUserGroup.html',
	"<div class=\"manage-user-group view\" ng-class=\"{loading: !isLoaded()}\">\n" +
	"\n" +
	"    <!-- User group header and data source tabs -->\n" +
	"    <div class=\"header tabbed\">\n" +
	"        <h2>{{'MANAGE_USER_GROUP.SECTION_HEADER_EDIT_USER_GROUP' | translate}}</h2>\n" +
	"        <guac-user-menu></guac-user-menu>\n" +
	"    </div>\n" +
	"    <data-data-source-tabs ng-hide=\"cloneSourceIdentifier\"\n" +
	"        permissions=\"managementPermissions\"\n" +
	"        url=\"getUserGroupURL(dataSource)\">\n" +
	"    </data-data-source-tabs>\n" +
	"\n" +
	"    <!-- Warn if user group is read-only -->\n" +
	"    <div class=\"section\" ng-hide=\"managementPermissions[dataSource].canSaveObject\">\n" +
	"        <p class=\"notice read-only\">{{'MANAGE_USER_GROUP.INFO_READ_ONLY' | translate}}</p>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Sections applicable to non-read-only user groups -->\n" +
	"    <div ng-show=\"managementPermissions[dataSource].canSaveObject\">\n" +
	"\n" +
	"        <!-- User group name -->\n" +
	"        <div class=\"section\">\n" +
	"            <table class=\"properties\">\n" +
	"                <tr>\n" +
	"                    <th>{{'MANAGE_USER_GROUP.FIELD_HEADER_USER_GROUP_NAME' | translate}}</th>\n" +
	"                    <td>\n" +
	"                        <input ng-show=\"canEditIdentifier()\" ng-model=\"userGroup.identifier\" type=\"text\"/>\n" +
	"                        <span  ng-hide=\"canEditIdentifier()\">{{userGroup.identifier}}</span>\n" +
	"                    </td>\n" +
	"                </tr>\n" +
	"            </table>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- User group attributes section -->\n" +
	"        <div class=\"attributes\" ng-show=\"managementPermissions[dataSource].canChangeAttributes\">\n" +
	"            <guac-form namespace=\"'USER_GROUP_ATTRIBUTES'\" content=\"attributes\"\n" +
	"                       model=\"userGroup.attributes\"\n" +
	"                       model-only=\"!managementPermissions[dataSource].canChangeAllAttributes\"></guac-form>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- System permissions section -->\n" +
	"        <system-permission-editor ng-show=\"managementPermissions[dataSource].canChangePermissions\"\n" +
	"              data-data-source=\"dataSource\"\n" +
	"              permission-flags=\"permissionFlags\"\n" +
	"              permissions-added=\"permissionsAdded\"\n" +
	"              permissions-removed=\"permissionsRemoved\">\n" +
	"        </system-permission-editor>\n" +
	"\n" +
	"        <!-- Parent group section -->\n" +
	"        <identifier-set-editor\n" +
	"            header=\"MANAGE_USER_GROUP.SECTION_HEADER_USER_GROUPS\"\n" +
	"            empty-placeholder=\"MANAGE_USER_GROUP.HELP_NO_USER_GROUPS\"\n" +
	"            unavailable-placeholder=\"MANAGE_USER_GROUP.INFO_NO_USER_GROUPS_AVAILABLE\"\n" +
	"            identifiers-available=\"availableGroups\"\n" +
	"            identifiers=\"parentGroups\"\n" +
	"            identifiers-added=\"parentGroupsAdded\"\n" +
	"            identifiers-removed=\"parentGroupsRemoved\">\n" +
	"        </identifier-set-editor>\n" +
	"\n" +
	"        <!-- Member group section -->\n" +
	"        <identifier-set-editor\n" +
	"            header=\"MANAGE_USER_GROUP.SECTION_HEADER_MEMBER_USER_GROUPS\"\n" +
	"            empty-placeholder=\"MANAGE_USER_GROUP.HELP_NO_MEMBER_USER_GROUPS\"\n" +
	"            unavailable-placeholder=\"MANAGE_USER_GROUP.INFO_NO_USER_GROUPS_AVAILABLE\"\n" +
	"            identifiers-available=\"availableGroups\"\n" +
	"            identifiers=\"memberGroups\"\n" +
	"            identifiers-added=\"memberGroupsAdded\"\n" +
	"            identifiers-removed=\"memberGroupsRemoved\">\n" +
	"        </identifier-set-editor>\n" +
	"\n" +
	"        <!-- Member user section -->\n" +
	"        <identifier-set-editor\n" +
	"            header=\"MANAGE_USER_GROUP.SECTION_HEADER_MEMBER_USERS\"\n" +
	"            empty-placeholder=\"MANAGE_USER_GROUP.HELP_NO_MEMBER_USERS\"\n" +
	"            unavailable-placeholder=\"MANAGE_USER_GROUP.INFO_NO_USERS_AVAILABLE\"\n" +
	"            identifiers-available=\"availableUsers\"\n" +
	"            identifiers=\"memberUsers\"\n" +
	"            identifiers-added=\"memberUsersAdded\"\n" +
	"            identifiers-removed=\"memberUsersRemoved\">\n" +
	"        </identifier-set-editor>\n" +
	"\n" +
	"        <!-- Connection permissions section -->\n" +
	"        <connection-permission-editor ng-show=\"managementPermissions[dataSource].canChangePermissions\"\n" +
	"              data-data-source=\"dataSource\"\n" +
	"              permission-flags=\"permissionFlags\"\n" +
	"              permissions-added=\"permissionsAdded\"\n" +
	"              permissions-removed=\"permissionsRemoved\">\n" +
	"        </connection-permission-editor>\n" +
	"\n" +
	"        <!-- Form action buttons -->\n" +
	"        <management-buttons namespace=\"MANAGE_USER_GROUP\"\n" +
	"              permissions=\"managementPermissions[dataSource]\"\n" +
	"              save=\"saveUserGroup()\"\n" +
	"              delete=\"deleteUserGroup()\"\n" +
	"              clone=\"cloneUserGroup()\"\n" +
	"              return=\"returnToUserGroupList()\">\n" +
	"        </management-buttons>\n" +
	"\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/manage/templates/managementButtons.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/managementButtons.html',
	"<div class=\"action-buttons\">\n" +
	"    <button ng-show=\"permissions.canSaveObject\" ng-click=\"saveObject()\">{{namespace + '.ACTION_SAVE' | translate}}</button>\n" +
	"    <button ng-show=\"permissions.canCloneObject\" ng-click=\"cloneObject()\">{{namespace + '.ACTION_CLONE' | translate}}</button>\n" +
	"    <button ng-click=\"cancel()\">{{namespace + '.ACTION_CANCEL' | translate}}</button>\n" +
	"    <button ng-show=\"permissions.canDeleteObject\" ng-click=\"deleteObject()\" class=\"danger\">{{namespace + '.ACTION_DELETE' | translate}}</button>\n" +
	"</div>");
}]);

angular.module('app/manage/templates/sharingProfilePermission.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/sharingProfilePermission.html',
	"<div class=\"choice\">\n" +
	"\n" +
	"    <!-- Sharing profile icon -->\n" +
	"    <div class=\"icon type\"></div>\n" +
	"\n" +
	"    <!-- Permission checkbox -->\n" +
	"    <input type=\"checkbox\" ng-model=\"context.getPermissionFlags().sharingProfilePermissions.READ[item.identifier]\"\n" +
	"                           ng-change=\"context.sharingProfilePermissionChanged(item.identifier)\"/>\n" +
	"\n" +
	"    <!-- Sharing profile name -->\n" +
	"    <span class=\"name\">{{item.name}}</span>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/manage/templates/systemPermissionEditor.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/manage/templates/systemPermissionEditor.html',
	"<div class=\"system-permissions\">\n" +
	"    <h2 class=\"header\">{{'MANAGE_USER.SECTION_HEADER_PERMISSIONS' | translate}}</h2>\n" +
	"    <div class=\"section\">\n" +
	"        <table class=\"properties\">\n" +
	"            <tr ng-repeat=\"systemPermissionType in systemPermissionTypes\"\n" +
	"                ng-show=\"canChangeSystemPermissions()\">\n" +
	"                <th>{{systemPermissionType.label | translate}}</th>\n" +
	"                <td><input type=\"checkbox\" ng-model=\"permissionFlags.systemPermissions[systemPermissionType.value]\"\n" +
	"                                           ng-change=\"systemPermissionChanged(systemPermissionType.value)\"/></td>\n" +
	"            </tr>\n" +
	"            <tr ng-show=\"username\">\n" +
	"                <th>{{'MANAGE_USER.FIELD_HEADER_CHANGE_OWN_PASSWORD' | translate}}</th>\n" +
	"                <td><input type=\"checkbox\" ng-model=\"permissionFlags.userPermissions.UPDATE[username]\"\n" +
	"                                           ng-change=\"userPermissionChanged('UPDATE', username)\"/></td>\n" +
	"            </tr>\n" +
	"        </table>\n" +
	"    </div>\n" +
	"</div>");
}]);

angular.module('app/navigation/templates/guacMenu.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/navigation/templates/guacMenu.html',
	"<div class=\"menu-dropdown\" ng-class=\"{open: menuShown}\" ng-click=\"toggleMenu()\">\n" +
	"    <div class=\"menu-title\">{{menuTitle}}</div>\n" +
	"    <div class=\"menu-indicator\"></div>\n" +
	"\n" +
	"    <!-- Menu contents -->\n" +
	"    <div class=\"menu-contents\" ng-transclude></div>\n" +
	"</div>");
}]);

angular.module('app/navigation/templates/guacPageList.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/navigation/templates/guacPageList.html',
	"<div class=\"page-list\" ng-show=\"levels.length\">\n" +
	"\n" +
	"    <!-- Navigation links -->\n" +
	"    <ul class=\"page-list-level\" ng-repeat=\"level in levels track by $index\">\n" +
	"        <li ng-repeat=\"page in getPages(level)\" class=\"{{page.className}}\">\n" +
	"            <a class=\"home\" ng-click=\"navigateToPage(page)\"\n" +
	"               ng-class=\"{current: isCurrentPage(page)}\" href=\"#{{page.url}}\">\n" +
	"                {{page.name | translate}}\n" +
	"            </a>\n" +
	"        </li>\n" +
	"    </ul>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/navigation/templates/guacSectionTabs.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/navigation/templates/guacSectionTabs.html',
	"<div class=\"section-tabs\" ng-show=\"tabs.length\">\n" +
	"    <ul>\n" +
	"        <li ng-repeat=\"name in tabs\">\n" +
	"            <a ng-click=\"selectTab(name)\"\n" +
	"               ng-class=\"{ current : isSelected(name) }\">\n" +
	"                {{ getSectionHeader(name) | translate }}\n" +
	"            </a>\n" +
	"        </li>\n" +
	"    </ul>\n" +
	"</div>");
}]);

angular.module('app/navigation/templates/guacUserMenu.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/navigation/templates/guacUserMenu.html',
	"<div class=\"user-menu\" ng-show=\"!isAnonymous()\">\n" +
	"    <guac-menu menu-title=\"username\">\n" +
	"           \n" +
	"        <!-- User profile view -->\n" +
	"        <div class=\"profile\" ng-show=\"fullName\">\n" +
	"            <div class=\"full-name\"><a ng-href=\"{{userURL}}\">{{ fullName }}</a></div>\n" +
	"            <div class=\"organizational-role\" ng-show=\"role\">{{ role }}</div>\n" +
	"            <div class=\"organization\" ng-show=\"organization\">{{ organization }}</div>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- Local actions -->\n" +
	"        <ul class=\"action-list\">\n" +
	"            <li ng-repeat=\"action in localActions\">\n" +
	"                <a ng-class=\"action.className\" ng-click=\"action.callback()\">\n" +
	"                    {{action.name | translate}}\n" +
	"                </a>\n" +
	"            </li>\n" +
	"        </ul>\n" +
	"\n" +
	"        <!-- Navigation links -->\n" +
	"        <guac-page-list pages=\"pages\"></guac-page-list>\n" +
	"\n" +
	"        <!-- Actions -->\n" +
	"        <ul class=\"action-list\">\n" +
	"            <li ng-repeat=\"action in actions\">\n" +
	"                <a ng-class=\"action.className\" ng-click=\"action.callback()\">\n" +
	"                    {{action.name | translate}}\n" +
	"                </a>\n" +
	"            </li>\n" +
	"        </ul>\n" +
	"\n" +
	"    </guac-menu>\n" +
	"</div>");
}]);

angular.module('app/notification/templates/guacNotification.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/notification/templates/guacNotification.html',
	"<form class=\"notification\" ng-class=\"notification.className\"\n" +
	"      ng-submit=\"notification.formSubmitCallback()\">\n" +
	"\n" +
	"    <!-- Notification title -->\n" +
	"    <div ng-show=\"notification.title\" class=\"title-bar\">\n" +
	"        <div class=\"title\">{{notification.title | translate}}</div>\n" +
	"    </div>\n" +
	"\n" +
	"    <div class=\"body\">\n" +
	"\n" +
	"        <!-- Notification text -->\n" +
	"        <p ng-show=\"notification.text\" class=\"text\"\n" +
	"           translate=\"{{notification.text.key}}\"\n" +
	"           translate-values=\"{{notification.text.variables}}\"></p>\n" +
	"\n" +
	"        <!-- Arbitrary parameters -->\n" +
	"        <div class=\"parameters\" ng-show=\"notification.forms\">\n" +
	"            <guac-form\n" +
	"                namespace=\"notification.formNamespace\"\n" +
	"                content=\"notification.forms\"\n" +
	"                model=\"notification.formModel\"\n" +
	"                model-only=\"true\"></guac-form>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- Current progress -->\n" +
	"        <div class=\"progress\" ng-show=\"notification.progress\"><div class=\"bar\" ng-show=\"progressPercent\" ng-style=\"{'width': progressPercent + '%'}\"></div><div\n" +
	"                ng-show=\"notification.progress.text\"\n" +
	"                translate=\"{{notification.progress.text}}\"\n" +
	"                translate-values=\"{PROGRESS: notification.progress.value, UNIT: notification.progress.unit}\"></div></div>\n" +
	"\n" +
	"        <!-- Default action countdown text -->\n" +
	"        <p class=\"countdown-text\"\n" +
	"           ng-show=\"notification.countdown.text\"\n" +
	"           translate=\"{{notification.countdown.text}}\"\n" +
	"           translate-values=\"{REMAINING: timeRemaining}\"></p>\n" +
	"\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Buttons -->\n" +
	"    <div ng-show=\"notification.actions.length\" class=\"buttons\">\n" +
	"        <button ng-repeat=\"action in notification.actions\" ng-click=\"action.callback()\" ng-class=\"action.className\">{{action.name | translate}}</button>\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/osk/templates/guacOsk.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/osk/templates/guacOsk.html',
	"<div class=\"osk\" guac-resize=\"keyboardResized\">\n" +
	"</div>");
}]);

angular.module('app/settings/templates/connection.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/connection.html',
	"<a ng-href=\"#/manage/{{item.dataSource}}/connections/{{item.identifier}}\"\n" +
	"   ng-class=\"{active: item.getActiveConnections()}\">\n" +
	"\n" +
	"    <!-- Connection icon -->\n" +
	"    <div class=\"icon type\" ng-class=\"item.protocol\"></div>\n" +
	"\n" +
	"    <!-- Connection name -->\n" +
	"    <span class=\"name\">{{item.name}}</span>\n" +
	"\n" +
	"    <!-- Active user count -->\n" +
	"    <span class=\"activeUserCount\" ng-show=\"item.getActiveConnections()\"\n" +
	"        translate=\"SETTINGS_CONNECTIONS.INFO_ACTIVE_USER_COUNT\"\n" +
	"        translate-values=\"{USERS: item.getActiveConnections()}\"></span>\n" +
	"\n" +
	"</a>");
}]);

angular.module('app/settings/templates/connectionGroup.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/connectionGroup.html',
	"<a ng-href=\"#/manage/{{item.dataSource}}/connectionGroups/{{item.identifier}}\">\n" +
	"\n" +
	"    <!-- Connection group icon -->\n" +
	"    <div class=\"icon type\"></div>\n" +
	"\n" +
	"    <!-- Connection group name -->\n" +
	"    <span class=\"name\">{{item.name}}</span>\n" +
	"\n" +
	"</a>");
}]);

angular.module('app/settings/templates/newConnection.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/newConnection.html',
	"<a ng-href=\"#/manage/{{item.dataSource}}/connections/?parent={{item.wrappedItem.identifier}}\">\n" +
	"    <span class=\"name\">{{'SETTINGS_CONNECTIONS.ACTION_NEW_CONNECTION' | translate}}</span>\n" +
	"</a>");
}]);

angular.module('app/settings/templates/newConnectionGroup.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/newConnectionGroup.html',
	"<a ng-href=\"#/manage/{{item.dataSource}}/connectionGroups/?parent={{item.wrappedItem.identifier}}\">\n" +
	"    <span class=\"name\">{{'SETTINGS_CONNECTIONS.ACTION_NEW_CONNECTION_GROUP' | translate}}</span>\n" +
	"</a>");
}]);

angular.module('app/settings/templates/newSharingProfile.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/newSharingProfile.html',
	"<a ng-href=\"#/manage/{{item.dataSource}}/sharingProfiles/?parent={{item.wrappedItem.identifier}}\">\n" +
	"    <span class=\"name\">{{'SETTINGS_CONNECTIONS.ACTION_NEW_SHARING_PROFILE' | translate}}</span>\n" +
	"</a>");
}]);

angular.module('app/settings/templates/settings.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/settings.html',
	"\n" +
	"<div class=\"view\">\n" +
	"\n" +
	"    <div class=\"header tabbed\">\n" +
	"        <h2>{{'SETTINGS.SECTION_HEADER_SETTINGS' | translate}}</h2>\n" +
	"        <guac-user-menu></guac-user-menu>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Available tabs -->\n" +
	"    <div class=\"page-tabs\">\n" +
	"        <guac-page-list pages=\"settingsPages\"></guac-page-list>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Selected tab -->\n" +
	"    <guac-settings-users                ng-if=\"activeTab === 'users'\"></guac-settings-users>\n" +
	"    <guac-settings-user-groups          ng-if=\"activeTab === 'userGroups'\"></guac-settings-user-groups>\n" +
	"    <guac-settings-connections          ng-if=\"activeTab === 'connections'\"></guac-settings-connections>\n" +
	"    <guac-settings-connection-history   ng-if=\"activeTab === 'history'\"></guac-settings-connection-history>\n" +
	"    <guac-settings-sessions             ng-if=\"activeTab === 'sessions'\"></guac-settings-sessions>\n" +
	"    <guac-settings-preferences          ng-if=\"activeTab === 'preferences'\"></guac-settings-preferences>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/settings/templates/settingsConnectionHistory.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/settingsConnectionHistory.html',
	"<div class=\"settings section connectionHistory\">\n" +
	"\n" +
	"    <!-- Connection history -->\n" +
	"    <p>{{'SETTINGS_CONNECTION_HISTORY.HELP_CONNECTION_HISTORY' | translate}}</p>\n" +
	"\n" +
	"    <!-- Search controls -->\n" +
	"    <form class=\"filter\" ng-submit=\"search()\">\n" +
	"        <input class=\"search-string\" type=\"text\" placeholder=\"{{'SETTINGS_CONNECTION_HISTORY.FIELD_PLACEHOLDER_FILTER' | translate}}\" ng-model=\"searchString\" />\n" +
	"        <input class=\"search-button\" type=\"submit\" value=\"{{'SETTINGS_CONNECTION_HISTORY.ACTION_SEARCH' | translate}}\" />\n" +
	"        <button type=\"button\" ng-click=\"downloadCSV()\">{{'SETTINGS_CONNECTION_HISTORY.ACTION_DOWNLOAD' | translate}}</button>\n" +
	"    </form>\n" +
	"\n" +
	"    <!-- Search results -->\n" +
	"    <div class=\"results\">\n" +
	"\n" +
	"        <!-- List of matching history records -->\n" +
	"        <table class=\"sorted history-list\">\n" +
	"            <thead>\n" +
	"                <tr>\n" +
	"                    <th guac-sort-order=\"order\" guac-sort-property=\"'username'\">\n" +
	"                        {{'SETTINGS_CONNECTION_HISTORY.TABLE_HEADER_SESSION_USERNAME' | translate}}\n" +
	"                    </th>\n" +
	"                    <th guac-sort-order=\"order\" guac-sort-property=\"'startDate'\">\n" +
	"                        {{'SETTINGS_CONNECTION_HISTORY.TABLE_HEADER_SESSION_STARTDATE' | translate}}\n" +
	"                    </th>\n" +
	"                    <th guac-sort-order=\"order\" guac-sort-property=\"'duration'\">\n" +
	"                        {{'SETTINGS_CONNECTION_HISTORY.TABLE_HEADER_SESSION_DURATION' | translate}}\n" +
	"                    </th>\n" +
	"                    <th guac-sort-order=\"order\" guac-sort-property=\"'connectionName'\">\n" +
	"                        {{'SETTINGS_CONNECTION_HISTORY.TABLE_HEADER_SESSION_CONNECTION_NAME' | translate}}\n" +
	"                    </th>\n" +
	"                    <th guac-sort-order=\"order\" guac-sort-property=\"'remoteHost'\">\n" +
	"                        {{'SETTINGS_CONNECTION_HISTORY.TABLE_HEADER_SESSION_REMOTEHOST' | translate}}\n" +
	"                    </th>\n" +
	"                </tr>\n" +
	"            </thead>\n" +
	"            <tbody ng-class=\"{loading: !isLoaded()}\">\n" +
	"                <tr ng-repeat=\"historyEntryWrapper in historyEntryWrapperPage\" class=\"history\">\n" +
	"                    <td><guac-user-item username=\"historyEntryWrapper.username\"></guac-user-item></td>\n" +
	"                    <td>{{historyEntryWrapper.startDate | date : dateFormat}}</td>\n" +
	"                    <td translate=\"{{historyEntryWrapper.readableDurationText}}\"\n" +
	"                        translate-values=\"{VALUE: historyEntryWrapper.readableDuration.value, UNIT: historyEntryWrapper.readableDuration.unit}\"></td>\n" +
	"                    <td>{{historyEntryWrapper.connectionName}}</td>\n" +
	"                    <td>{{historyEntryWrapper.remoteHost}}</td>\n" +
	"                </tr>\n" +
	"            </tbody>\n" +
	"        </table>\n" +
	"\n" +
	"        <!-- Text displayed if no history exists -->\n" +
	"        <p class=\"placeholder\" ng-show=\"isHistoryEmpty()\">\n" +
	"            {{'SETTINGS_CONNECTION_HISTORY.INFO_NO_HISTORY' | translate}}\n" +
	"        </p>\n" +
	"\n" +
	"        <!-- Pager for history list -->\n" +
	"        <guac-pager page=\"historyEntryWrapperPage\" page-size=\"25\"\n" +
	"                    items=\"historyEntryWrappers | orderBy : order.predicate\"></guac-pager>\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/settings/templates/settingsConnections.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/settingsConnections.html',
	"<div class=\"settings section connections\" ng-class=\"{loading: !isLoaded()}\">\n" +
	"\n" +
	"    <!-- Connection management -->\n" +
	"    <p>{{'SETTINGS_CONNECTIONS.HELP_CONNECTIONS' | translate}}</p>\n" +
	"\n" +
	"    <!-- Connection management toolbar -->\n" +
	"    <div class=\"toolbar\">\n" +
	"\n" +
	"        <!-- Form action buttons -->\n" +
	"        <div class=\"action-buttons\">\n" +
	"\n" +
	"            <a class=\"add-connection button\"\n" +
	"               ng-show=\"canCreateConnections()\"\n" +
	"               href=\"#/manage/{{dataSource}}/connections/\">{{'SETTINGS_CONNECTIONS.ACTION_NEW_CONNECTION' | translate}}</a>\n" +
	"\n" +
	"            <a class=\"add-connection-group button\"\n" +
	"               ng-show=\"canCreateConnectionGroups()\"\n" +
	"               href=\"#/manage/{{dataSource}}/connectionGroups/\">{{'SETTINGS_CONNECTIONS.ACTION_NEW_CONNECTION_GROUP' | translate}}</a>\n" +
	"\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- Connection filter -->\n" +
	"        <guac-group-list-filter connection-groups=\"rootGroups\"\n" +
	"            filtered-connection-groups=\"filteredRootGroups\"\n" +
	"            placeholder=\"'SETTINGS_CONNECTIONS.FIELD_PLACEHOLDER_FILTER' | translate\"\n" +
	"            connection-properties=\"filteredConnectionProperties\"\n" +
	"            connection-group-properties=\"filteredConnectionGroupProperties\"></guac-group-list-filter>\n" +
	"\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- List of accessible connections and groups -->\n" +
	"    <div class=\"connection-list\">\n" +
	"        <guac-group-list\n" +
	"            page-size=\"25\"\n" +
	"            connection-groups=\"filteredRootGroups\"\n" +
	"            decorator=\"rootItemDecorator\"\n" +
	"            templates=\"{\n" +
	"\n" +
	"                'connection'       : 'app/settings/templates/connection.html',\n" +
	"                'sharing-profile'  : 'app/settings/templates/sharingProfile.html',\n" +
	"                'connection-group' : 'app/settings/templates/connectionGroup.html',\n" +
	"\n" +
	"                'new-connection'       : 'app/settings/templates/newConnection.html',\n" +
	"                'new-sharing-profile'  : 'app/settings/templates/newSharingProfile.html',\n" +
	"                'new-connection-group' : 'app/settings/templates/newConnectionGroup.html'\n" +
	"\n" +
	"            }\"/>\n" +
	"    </div>\n" +
	"</div>");
}]);

angular.module('app/settings/templates/settingsPreferences.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/settingsPreferences.html',
	"<div class=\"preferences\" ng-class=\"{loading: !isLoaded()}\">\n" +
	"\n" +
	"    <!-- Locale settings -->\n" +
	"    <div class=\"settings section locale\">\n" +
	"        <p>{{'SETTINGS_PREFERENCES.HELP_LOCALE' | translate}}</p>\n" +
	"        <guac-form content=\"localeFields\" model=\"preferences\" namespace=\"'SETTINGS_PREFERENCES'\"></guac-form>\n" +
	"    </div>\n" +
	"    \n" +
	"    <!-- Password update -->\n" +
	"    <h2 class=\"header\" ng-show=\"canChangePassword\">{{'SETTINGS_PREFERENCES.SECTION_HEADER_UPDATE_PASSWORD' | translate}}</h2>\n" +
	"    <div class=\"settings section update-password\" ng-show=\"canChangePassword\">\n" +
	"        <p>{{'SETTINGS_PREFERENCES.HELP_UPDATE_PASSWORD' | translate}}</p>\n" +
	"\n" +
	"        <!-- Password editor -->\n" +
	"        <div class=\"form\">\n" +
	"            <table class=\"fields\">\n" +
	"                <tr>\n" +
	"                    <th>{{'SETTINGS_PREFERENCES.FIELD_HEADER_PASSWORD_OLD' | translate}}</th>\n" +
	"                    <td><input ng-model=\"oldPassword\" type=\"password\" /></td>\n" +
	"                </tr>\n" +
	"                <tr>\n" +
	"                    <th>{{'SETTINGS_PREFERENCES.FIELD_HEADER_PASSWORD_NEW' | translate}}</th>\n" +
	"                    <td><input ng-model=\"newPassword\" type=\"password\" /></td>\n" +
	"                </tr>\n" +
	"                <tr>\n" +
	"                    <th>{{'SETTINGS_PREFERENCES.FIELD_HEADER_PASSWORD_NEW_AGAIN' | translate}}</th>\n" +
	"                    <td><input ng-model=\"newPasswordMatch\" type=\"password\" /></td>\n" +
	"                </tr>\n" +
	"            </table>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- Form action buttons -->\n" +
	"        <div class=\"action-buttons\">\n" +
	"            <button class=\"change-password\" ng-click=\"updatePassword()\">{{'SETTINGS_PREFERENCES.ACTION_UPDATE_PASSWORD' | translate}}</button>\n" +
	"        </div>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Input method -->\n" +
	"    <h2 class=\"header\">{{'SETTINGS_PREFERENCES.SECTION_HEADER_DEFAULT_INPUT_METHOD' | translate}}</h2>\n" +
	"    <div class=\"settings section input-method\">\n" +
	"        <p>{{'SETTINGS_PREFERENCES.HELP_DEFAULT_INPUT_METHOD' | translate}}</p>\n" +
	"        <div class=\"choices\">\n" +
	"\n" +
	"            <!-- No IME -->\n" +
	"            <div class=\"choice\">\n" +
	"                <label><input id=\"ime-none\" name=\"input-method\" ng-model=\"preferences.inputMethod\" type=\"radio\" value=\"none\"/> {{'SETTINGS_PREFERENCES.NAME_INPUT_METHOD_NONE' | translate}}</label>\n" +
	"                <p class=\"caption\"><label for=\"ime-none\">{{'SETTINGS_PREFERENCES.HELP_INPUT_METHOD_NONE' | translate}}</label></p>\n" +
	"            </div>\n" +
	"\n" +
	"            <!-- Text input -->\n" +
	"            <div class=\"choice\">\n" +
	"                <label><input id=\"ime-text\" name=\"input-method\" ng-model=\"preferences.inputMethod\" type=\"radio\" value=\"text\"/> {{'SETTINGS_PREFERENCES.NAME_INPUT_METHOD_TEXT' | translate}}</label>\n" +
	"                <p class=\"caption\"><label for=\"ime-text\">{{'SETTINGS_PREFERENCES.HELP_INPUT_METHOD_TEXT' | translate}} </label></p>\n" +
	"            </div>\n" +
	"\n" +
	"            <!-- Guac OSK -->\n" +
	"            <div class=\"choice\">\n" +
	"                <label><input id=\"ime-osk\" name=\"input-method\" ng-model=\"preferences.inputMethod\" type=\"radio\" value=\"osk\"/> {{'SETTINGS_PREFERENCES.NAME_INPUT_METHOD_OSK' | translate}}</label>\n" +
	"                <p class=\"caption\"><label for=\"ime-osk\">{{'SETTINGS_PREFERENCES.HELP_INPUT_METHOD_OSK' | translate}}</label></p>\n" +
	"            </div>\n" +
	"\n" +
	"        </div>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Mouse mode -->\n" +
	"    <h2 class=\"header\">{{'SETTINGS_PREFERENCES.SECTION_HEADER_DEFAULT_MOUSE_MODE' | translate}}</h2>\n" +
	"    <div class=\"settings section mouse-mode\">\n" +
	"        <p>{{'SETTINGS_PREFERENCES.HELP_DEFAULT_MOUSE_MODE' | translate}}</p>\n" +
	"        <div class=\"choices\">\n" +
	"\n" +
	"            <!-- Touchscreen -->\n" +
	"            <div class=\"choice\">\n" +
	"                <input name=\"mouse-mode\" ng-model=\"preferences.emulateAbsoluteMouse\" type=\"radio\" ng-value=\"true\" checked=\"checked\" id=\"absolute\"/>\n" +
	"                <div class=\"figure\">\n" +
	"                    <label for=\"absolute\"><img src=\"images/settings/touchscreen.png\" alt=\"{{'SETTINGS_PREFERENCES.NAME_MOUSE_MODE_ABSOLUTE' | translate}}\"/></label>\n" +
	"                    <p class=\"caption\"><label for=\"absolute\">{{'SETTINGS_PREFERENCES.HELP_MOUSE_MODE_ABSOLUTE' | translate}}</label></p>\n" +
	"                </div>\n" +
	"            </div>\n" +
	"\n" +
	"            <!-- Touchpad -->\n" +
	"            <div class=\"choice\">\n" +
	"                <input name=\"mouse-mode\" ng-model=\"preferences.emulateAbsoluteMouse\" type=\"radio\" ng-value=\"false\" id=\"relative\"/>\n" +
	"                <div class=\"figure\">\n" +
	"                    <label for=\"relative\"><img src=\"images/settings/touchpad.png\" alt=\"{{'SETTINGS_PREFERENCES.NAME_MOUSE_MODE_RELATIVE' | translate}}\"/></label>\n" +
	"                    <p class=\"caption\"><label for=\"relative\">{{'SETTINGS_PREFERENCES.HELP_MOUSE_MODE_RELATIVE' | translate}}</label></p>\n" +
	"                </div>\n" +
	"            </div>\n" +
	"\n" +
	"        </div>\n" +
	"    </div>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/settings/templates/settingsSessions.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/settingsSessions.html',
	"<div class=\"settings section sessions\" ng-class=\"{loading: !isLoaded()}\">\n" +
	"\n" +
	"    <!-- User Session management -->\n" +
	"    <p>{{'SETTINGS_SESSIONS.HELP_SESSIONS' | translate}}</p>\n" +
	"\n" +
	"    <!-- Form action buttons -->\n" +
	"    <div class=\"action-buttons\">\n" +
	"        <button class=\"delete-sessions danger\" ng-disabled=\"!canDeleteSessions()\" ng-click=\"deleteSessions()\">{{'SETTINGS_SESSIONS.ACTION_DELETE' | translate}}</button>\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- Session filter -->\n" +
	"    <guac-filter filtered-items=\"filteredWrappers\" items=\"wrappers\"\n" +
	"                 placeholder=\"'SETTINGS_SESSIONS.FIELD_PLACEHOLDER_FILTER' | translate\"\n" +
	"                 properties=\"filteredWrapperProperties\"></guac-filter>\n" +
	"\n" +
	"    <!-- List of current user sessions -->\n" +
	"    <table class=\"sorted session-list\">\n" +
	"        <thead>\n" +
	"            <tr>\n" +
	"                <th class=\"select-session\"></th>\n" +
	"                <th guac-sort-order=\"wrapperOrder\" guac-sort-property=\"'activeConnection.username'\">\n" +
	"                    {{'SETTINGS_SESSIONS.TABLE_HEADER_SESSION_USERNAME' | translate}}\n" +
	"                </th>\n" +
	"                <th guac-sort-order=\"wrapperOrder\" guac-sort-property=\"'startDate'\">\n" +
	"                    {{'SETTINGS_SESSIONS.TABLE_HEADER_SESSION_STARTDATE' | translate}}\n" +
	"                </th>\n" +
	"                <th guac-sort-order=\"wrapperOrder\" guac-sort-property=\"'activeConnection.remoteHost'\">\n" +
	"                    {{'SETTINGS_SESSIONS.TABLE_HEADER_SESSION_REMOTEHOST' | translate}}\n" +
	"                </th>\n" +
	"                <th guac-sort-order=\"wrapperOrder\" guac-sort-property=\"'name'\">\n" +
	"                    {{'SETTINGS_SESSIONS.TABLE_HEADER_SESSION_CONNECTION_NAME' | translate}}\n" +
	"                </th>\n" +
	"            </tr>\n" +
	"        </thead>\n" +
	"        <tbody>\n" +
	"            <tr ng-repeat=\"wrapper in wrapperPage\" class=\"session\">\n" +
	"                <td class=\"select-session\">\n" +
	"                    <input ng-change=\"wrapperSelectionChange(wrapper)\" type=\"checkbox\" ng-model=\"wrapper.checked\" />\n" +
	"                </td>\n" +
	"                <td><guac-user-item username=\"wrapper.activeConnection.username\"></guac-user-item></td>\n" +
	"                <td>{{wrapper.startDate}}</td>\n" +
	"                <td>{{wrapper.activeConnection.remoteHost}}</td>\n" +
	"                <td><a ng-href=\"{{\n" +
	"                    getClientURL(wrapper.dataSource, wrapper.activeConnection)\n" +
	"                }}\">{{wrapper.name}}</a></td>\n" +
	"            </tr>\n" +
	"        </tbody>\n" +
	"    </table>\n" +
	"\n" +
	"    <!-- Text displayed if no sessions exist -->\n" +
	"    <p class=\"placeholder\" ng-hide=\"wrapperPage.length\">\n" +
	"        {{'SETTINGS_SESSIONS.INFO_NO_SESSIONS' | translate}}\n" +
	"    </p>\n" +
	"\n" +
	"    <!-- Pager for session list -->\n" +
	"    <guac-pager page=\"wrapperPage\" page-size=\"25\"\n" +
	"                items=\"filteredWrappers | orderBy : wrapperOrder.predicate\"></guac-pager>\n" +
	"</div>");
}]);

angular.module('app/settings/templates/settingsUserGroups.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/settingsUserGroups.html',
	"<div class=\"settings section user-groups\" ng-class=\"{loading: !isLoaded()}\">\n" +
	"\n" +
	"    <!-- User group management -->\n" +
	"    <p>{{'SETTINGS_USER_GROUPS.HELP_USER_GROUPS' | translate}}</p>\n" +
	"\n" +
	"\n" +
	"    <!-- User management toolbar -->\n" +
	"    <div class=\"toolbar\">\n" +
	"\n" +
	"        <!-- Form action buttons -->\n" +
	"        <div class=\"action-buttons\">\n" +
	"            <a class=\"add-user-group button\" ng-show=\"canCreateUserGroups()\"\n" +
	"               href=\"#/manage/{{getDefaultDataSource()}}/userGroups/\">{{'SETTINGS_USER_GROUPS.ACTION_NEW_USER_GROUP' | translate}}</a>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- User group filter -->\n" +
	"        <guac-filter filtered-items=\"filteredManageableUserGroups\" items=\"manageableUserGroups\"\n" +
	"                     placeholder=\"'SETTINGS_USER_GROUPS.FIELD_PLACEHOLDER_FILTER' | translate\"\n" +
	"                     properties=\"filteredUserGroupProperties\"></guac-filter>\n" +
	"\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- List of user groups this user has access to -->\n" +
	"    <table class=\"sorted user-group-list\">\n" +
	"        <thead>\n" +
	"            <tr>\n" +
	"                <th guac-sort-order=\"order\" guac-sort-property=\"'userGroup.identifier'\" class=\"user-group-name\">\n" +
	"                    {{'SETTINGS_USER_GROUPS.TABLE_HEADER_USER_GROUP_NAME' | translate}}\n" +
	"                </th>\n" +
	"            </tr>\n" +
	"        </thead>\n" +
	"        <tbody ng-class=\"{loading: !isLoaded()}\">\n" +
	"            <tr ng-repeat=\"manageableUserGroup in manageableUserGroupPage\" class=\"user-group\">\n" +
	"                <td class=\"user-group-name\">\n" +
	"                    <a ng-href=\"#/manage/{{manageableUserGroup.dataSource}}/userGroups/{{manageableUserGroup.userGroup.identifier}}\">\n" +
	"                        <div class=\"icon user-group\"></div>\n" +
	"                        <span class=\"name\">{{manageableUserGroup.userGroup.identifier}}</span>\n" +
	"                    </a>\n" +
	"                </td>\n" +
	"            </tr>\n" +
	"        </tbody>\n" +
	"    </table>\n" +
	"\n" +
	"    <!-- Pager controls for user group list -->\n" +
	"    <guac-pager page=\"manageableUserGroupPage\" page-size=\"25\"\n" +
	"                items=\"filteredManageableUserGroups | orderBy : order.predicate\"></guac-pager>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/settings/templates/settingsUsers.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/settingsUsers.html',
	"<div class=\"settings section users\" ng-class=\"{loading: !isLoaded()}\">\n" +
	"\n" +
	"    <!-- User management -->\n" +
	"    <p>{{'SETTINGS_USERS.HELP_USERS' | translate}}</p>\n" +
	"\n" +
	"\n" +
	"    <!-- User management toolbar -->\n" +
	"    <div class=\"toolbar\">\n" +
	"\n" +
	"        <!-- Form action buttons -->\n" +
	"        <div class=\"action-buttons\">\n" +
	"            <a class=\"add-user button\" ng-show=\"canCreateUsers()\"\n" +
	"               href=\"#/manage/{{getDefaultDataSource()}}/users/\">{{'SETTINGS_USERS.ACTION_NEW_USER' | translate}}</a>\n" +
	"        </div>\n" +
	"\n" +
	"        <!-- User filter -->\n" +
	"        <guac-filter filtered-items=\"filteredManageableUsers\" items=\"manageableUsers\"\n" +
	"                     placeholder=\"'SETTINGS_USERS.FIELD_PLACEHOLDER_FILTER' | translate\"\n" +
	"                     properties=\"filteredUserProperties\"></guac-filter>\n" +
	"\n" +
	"    </div>\n" +
	"\n" +
	"    <!-- List of users this user has access to -->\n" +
	"    <table class=\"sorted user-list\">\n" +
	"        <thead>\n" +
	"            <tr>\n" +
	"                <th guac-sort-order=\"order\" guac-sort-property=\"'user.username'\" class=\"username\">\n" +
	"                    {{'SETTINGS_USERS.TABLE_HEADER_USERNAME' | translate}}\n" +
	"                </th>\n" +
	"                <th guac-sort-order=\"order\" guac-sort-property=\"'user.attributes[\\'guac-organization\\']'\" class=\"organization\">\n" +
	"                    {{'SETTINGS_USERS.TABLE_HEADER_ORGANIZATION' | translate}}\n" +
	"                </th>\n" +
	"                <th guac-sort-order=\"order\" guac-sort-property=\"'user.attributes[\\'guac-full-name\\']'\" class=\"full-name\">\n" +
	"                    {{'SETTINGS_USERS.TABLE_HEADER_FULL_NAME' | translate}}\n" +
	"                </th>\n" +
	"                <th guac-sort-order=\"order\" guac-sort-property=\"'user.lastActive'\" class=\"last-active\">\n" +
	"                    {{'SETTINGS_USERS.TABLE_HEADER_LAST_ACTIVE' | translate}}\n" +
	"                </th>\n" +
	"            </tr>\n" +
	"        </thead>\n" +
	"        <tbody ng-class=\"{loading: !isLoaded()}\">\n" +
	"            <tr ng-repeat=\"manageableUser in manageableUserPage\" class=\"user\">\n" +
	"                <td class=\"username\">\n" +
	"                    <a ng-href=\"#/manage/{{manageableUser.dataSource}}/users/{{manageableUser.user.username}}\">\n" +
	"                        <div class=\"icon user\"></div>\n" +
	"                        <span class=\"name\">{{manageableUser.user.username}}</span>\n" +
	"                    </a>\n" +
	"                </td>\n" +
	"                <td class=\"organization\">{{manageableUser.user.attributes['guac-organization']}}</td>\n" +
	"                <td class=\"full-name\">{{manageableUser.user.attributes['guac-full-name']}}</td>\n" +
	"                <td class=\"last-active\">{{manageableUser.user.lastActive | date : dateFormat}}</td>\n" +
	"            </tr>\n" +
	"        </tbody>\n" +
	"    </table>\n" +
	"\n" +
	"    <!-- Pager controls for user list -->\n" +
	"    <guac-pager page=\"manageableUserPage\" page-size=\"25\"\n" +
	"                items=\"filteredManageableUsers | orderBy : order.predicate\"></guac-pager>\n" +
	"\n" +
	"</div>");
}]);

angular.module('app/settings/templates/sharingProfile.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/settings/templates/sharingProfile.html',
	"<a ng-href=\"#/manage/{{item.dataSource}}/sharingProfiles/{{item.identifier}}\">\n" +
	"\n" +
	"    <!-- Sharing profile icon -->\n" +
	"    <div class=\"icon type\"></div>\n" +
	"\n" +
	"    <!-- Sharing profile name -->\n" +
	"    <span class=\"name\">{{item.name}}</span>\n" +
	"\n" +
	"</a>");
}]);

angular.module('app/textInput/templates/guacKey.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/textInput/templates/guacKey.html',
	"<button class=\"key\" ng-mousedown=\"updateKey($event)\" ng-class=\"{pressed: pressed, sticky: sticky}\">\n" +
	"    {{text | translate}}\n" +
	"</button>");
}]);

angular.module('app/textInput/templates/guacTextInput.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('app/textInput/templates/guacTextInput.html',
	"<div class=\"text-input\">\n" +
	"\n" +
	"    <!-- Text input target -->\n" +
	"    <div class=\"text-input-field\"><div class=\"sent-history\"><div class=\"sent-text\" ng-repeat=\"text in sentText track by $index\">{{text}}</div></div><textarea rows=\"1\" class=\"target\" autocorrect=\"off\" autocapitalize=\"off\" autofocus></textarea></div><div class=\"text-input-buttons\"><guac-key keysym=\"65507\" sticky=\"true\" text=\"'CLIENT.NAME_KEY_CTRL'\" pressed=\"ctrlPressed\"></guac-key><guac-key keysym=\"65513\" sticky=\"true\" text=\"'CLIENT.NAME_KEY_ALT'\" pressed=\"altPressed\"></guac-key><guac-key keysym=\"65307\" text=\"'CLIENT.NAME_KEY_ESC'\"></guac-key><guac-key keysym=\"65289\" text=\"'CLIENT.NAME_KEY_TAB'\"></guac-key></div>\n" +
	"\n" +
	"</div>");
}]);

