---
title: "시작하기"
linkTitle: "Getting Started"
weight: 3
date: 2022-05-31
description: >
    이 페이지는 [SpaceOne Design System](https://github.com/cloudforet-io/spaceone-design-system) 개발을 시작하기 위한 안내문서입니다.
no_list: true
---

## 개발 환경 세팅


### Fork

현재 스페이스원의 콘솔은 오픈소스로 운영중에 있습니다.

개발에 기여하기위해 먼저 [Design System 레포지토리](https://github.com/cloudforet-io/spaceone-design-system)를 개인 github 계정에 포크해 줍니다.

### Clone

이후 포크해온 레포지토리를 로컬로 클론해 줍니다.

서브모듈로 [assets](https://github.com/cloudforet-io/console-assets)과 [번역 관련 레포지토리](https://github.com/cloudforet-io/design-system-translation.git)가 사용중이기 때문에 함께 초기화합니다.

```shell
git clone --recurse-submodules https://github.com/[github username]/spaceone-design-system

cd console
```

### Run Storybook

콘솔을 실행 실행시키기 위해 npm으로 의존성을 설치하고, 스크립트를 실행해 줍니다.
```shell
npm install --no-save

npm run storybook
```

### Build

배포 가능한 zip을 생성하려면 아래의 스크립트를 실행하시면 됩니다.

```shell
npm run build
```


## 스토리북

<br/>

SpaceOne Design system은 [Storybook](https://storybook.developer.spaceone.dev/?path=/story/data-display-badges--style-types)을 제공하고 있습니다.

컴포넌트를 생성하면 해당 컴포넌트의 기능 정의를 Storybook을 통해 문서화합니다.

기본적으로 한 컴포넌트가 아래와 같은 구조로 구성되어 있습니다. 

```text
- component-name
    - [component-name].stories.mdx
    - [component-name].vue
    - story-helper.ts
    - type.ts
```

### [component-name].stories.mdx 와 story-helper.ts

컴포넌트의 설명, 사용예시, Playground를 제공합니다.

mdx 포멧을 사용중이며 사용방법은 [문서](https://storybook.js.org/docs/6.3/vue/writing-docs/mdx)를 참고하십시오.

playground에 명시되는 props, slots, events와 같은 속성들은 가독성을 위해 story-helper를 통해 분리하여 작성하는 방식을 지향합니다.  


## 차트 라이선스

<br/>

SpaceONE 디자인 시스템은 내부적으로 amCharts for Dynamic Chart를 사용합니다.

디자인 시스템을 사용하기 전에 amCharts의 라이선스를 확인해주십시오.

자신에게 적합한 amCharts 라이선스를 구입하여 애플리케이션에서 사용하려면 [라이선스 FAQ](https://www.amcharts.com/online-store/licenses-explained/)를 참조하십시오.

## 스타일

<br/>

스타일 정의에 있어 SpaceOne Console은 [tailwind css](https://tailwindcss.com)와 [postcss](https://postcss.org/)를 사용중에 있습니다.

SpaceOne의 color palette에 따라 tailwind 커스텀을 통해 적용되어 있습니다. (세부 정보는 [storybook](https://storybook.developer.spaceone.dev/?path=/docs/foundation-styles-colors--all-colors)을 참고해주세요)
