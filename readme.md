# U Group | Code Challenge

Tags: challenge

Requires at least: 5.1

Tested up to: 5.2

Requires PHP: 7.2

Stable tag: 4.3

License: GPLv2 or later

License URI: http://www.gnu.org/licenses/gpl-2.0.html

A custom block that inserts a project. Code challenge defined below

---

## Description

### Code Challenge:
- Create a Gutenberg block within a custom plugin

### The block must:
- Have an editable text field within the editor
- Include an option in the panel for modifying a CSS property of the block (such as background color or width)
- Cause React to re-render the block when an option is changed from the sidebar
- Display in the published page/post as it was configured in Gutenberg
- The use of Webpack for compiling the block is encouraged, but not required.
- The plugin should be pushed to a Github repository so that we may review and test it.
- This will then be used for discussion as part of the interview.

#### A note from the developer

This custom block is made up of 4 editable fields. They are as follows:

- Image
- Title
- Description
- Url

There is an option to change the background color of the project item. If the color is dark (chosen from the palette) the text will change to a lighter color. I also used [@wordpress/scripts](https://developer.wordpress.org/block-editor/packages/packages-scripts/) as it is a great tool to make use of webpack.

As always, there is a lot that could be done to expand this plugin. However, for this code challenge, I think it will suffice.

---

## Installation

1. Download the plugin and unzip
2. Upload the plugin to the `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress

or

1. Download the plugin
2. Upload the plugin by clicking 'Add New' in the plugins menu within the WordPress dashboard