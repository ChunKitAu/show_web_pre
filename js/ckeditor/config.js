/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
    config.language = 'zh-cn';
	// config.uiColor = '#AADC6E';

    config.toolbar = [
        { name: 'document', items: [ 'Source'] },
        { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', ] },
        { name: 'paragraph', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
        { name: 'links', items: [ 'Link', 'Unlink'] },
        { name: 'insert', items: [ 'Image', 'Html5video', 'Table', 'HorizontalRule' ] },
        '/',
        { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
        { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
        { name: 'tools', items: [ 'Maximize'] },
    ];


    //上传图片路径
    config.filebrowserImageUploadUrl  = "http://10.0.57.28:8080/uploadImage";
    //文件上传路径
    // config.filebrowserUploadUrl  = "/uploadImage";

    //html5视频上传路径
    config.filebrowserHtml5videoUploadUrl = "http://10.0.57.28:8080/uploadVdeio";

    //flah上传
    // config.filebrowserFlashUploadUrl ="";

    // 配置粘贴的图片的上传路径
    config.uploadUrl="http://10.0.57.28:8080/uploadImage";
    // 添加图片粘贴插件
    config.extraPlugins="imagepaste";

    //工具栏默认是否展开
    config.toolbarStartupExpanded = true;
    //工具栏是否可以被收缩
    config.toolbarCanCollapse = true;

    //当用户键入TAB时，编辑器走过的空格数，(&nbsp;) 当值为0时，焦点将移出编辑框  如果不设置则无任何效果
    config.tabSpaces = 4;


};
