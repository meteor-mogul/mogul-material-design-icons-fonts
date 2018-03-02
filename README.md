# mogul-material-design-icons-fonts
Material Design icons by Google packaged for Meteor Mogul.

## What

These are just the font files for [Google's Material Design Icons](http://google.github.io/material-design-icons/) packaged for Meteor and made available through Atmosphere.

One CSS file (`material-icons.css`) is provided, and several font files for the icons are provided as static assets.

## Why

This makes the icon fonts available locally so you can develop Meteor Mogul apps that show the right icons even if your Internet connection goes away or the Google font server goes down.

The standard way to include fonts in an app requires an Internet connection to Google's font server:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
```

When you add this package to your app, you no longer need to connect to Google to download the Material Icons.  This package provides those icon font files locally.

This package provides only the font files for the icons, not everything that the full Google Material Design Icons `npm` package provides.  I have found that including a large `npm` package like that slows down re-building meteor apps, so I've pared down this package to just the essentials to get icons to work in Meteor Mogul.

## How

From a shell, `$ meteor add meteormogul:material-design-icons-fonts` or edit your `.meteor/packages` file by hand to include `meteormogul:material-design-icons-fonts`.
