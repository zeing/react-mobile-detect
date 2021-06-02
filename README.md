# react-mobile-detect

mobile detect device for react component 
implement from [react-device-detect](https://www.npmjs.com/package/react-device-detect) for my own work

## Installation

To install, you can use npm or yarn:

```
npm i react-mobile-detect
or
yarn add react-mobile-detect
```

## Usage

```
import {
  BrowserView, // Modify this
  MobileView, // Modify this
  isMobile
} from "react-mobile-detect";
```

### for Next.js

```
import dynamic from 'next/dynamic'

const BrowserView = dynamic(() => import('~/components/BrowserView'), { ssr: false })

const MobileView = dynamic(() => import('~/components/MobileView'), { ssr: false })

```

## Run

```
1. git clone https://github.com/zeing/react-mobile-detect.git

2. yarn

3. yarn start

```
