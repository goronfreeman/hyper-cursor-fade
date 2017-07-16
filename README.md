# hyper-cursor-fade [![hyper](https://img.shields.io/badge/Hyper-v1.3.0-green.svg)](https://github.com/zeit/hyper/releases/tag/1.3.0) [![npm](https://img.shields.io/npm/v/hyper-cursor-fade.svg?maxAge=86400?style=flat-square)](https://www.npmjs.com/package/hyper-cursor-fade) [![npm](https://img.shields.io/npm/dt/hyper-cursor-fade.svg?maxAge=86400?style=flat-square)](https://www.npmjs.com/package/hyper-cursor-fade)

> Cursor blink customization for [Hyper](https://hyper.is).

![hyper-cursor-fade](http://i.imgur.com/4cxC2nk.gif)


## Install

Add following to your `~/.hyper.js` config.

```javascript
module.exports = {
  ...
  plugins: ['hyper-cursor-fade']
  ...
}
```


## Config

Add following to `~/.hyper.js`

### Change Fade Duration
Default value is set to 250

```javascript
module.exports = {
  config: {
    ...
      hyperCursorFade: {
        fadeDuration: 250
      }
    ...
  }
}
```

## Theme

* [hyper-dracula](https://www.npmjs.com/package/hyper-dracula)

## License

MIT
