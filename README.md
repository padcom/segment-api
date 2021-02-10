# Segment API as module

This is a module that acts as a forwarder to `window.analytics` created by the Segment initializer.

## API

All the methods explained by the client are forwarded to `windows.analytics`. Check out their documentation at https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/

The following has been added to make the initialization configurable:

### `init(key)` - initialize Segment API

The `key` is what you can find in the settings for your source in Segment. It's been extracted as a separate function so that you can initailize it at a time of your choosing rather than as a separate script. The `key` can also be different depending on the application and/or environment you're using.

## Credits

Created by Matthias Hryniszak \<padcom@gmail.com\>. Please let me know if you want to extend it in any way or if you find any bugs.