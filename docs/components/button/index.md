# Button 按钮

## 基础用法

使用`type`、`plain`、`round`属性来定义 Button 的样式。

:::demo

```vue
<template>
  <div style="margin-bottom:20px;">
    <w-button>Default</w-button>
    <w-button type="primary">Primary</w-button>
    <w-button type="success">Success</w-button>
    <w-button type="info">Info</w-button>
    <w-button type="warning">Warning</w-button>
    <w-button type="danger">Danger</w-button>
  </div>
  <div style="margin-bottom:20px;">
    <w-button plain>Default</w-button>
    <w-button plain type="primary">Primary</w-button>
    <w-button plain type="success">Success</w-button>
    <w-button plain type="info">Info</w-button>
    <w-button plain type="warning">Warning</w-button>
    <w-button plain type="danger">Danger</w-button>
  </div>
  <div style="margin-bottom:20px;">
    <w-button round>Default</w-button>
    <w-button round type="primary">Primary</w-button>
    <w-button round type="success">Success</w-button>
    <w-button round type="info">Info</w-button>
    <w-button round type="warning">Warning</w-button>
    <w-button round type="danger">Danger</w-button>
  </div>

  <div style="margin-bottom:20px;">
    <w-button circle icon="search" type="dfault"></w-button>
    <w-button circle icon="edit" type="primary"></w-button>
    <w-button circle icon="delete" type="success"></w-button>
    <w-button circle icon="add" type="info"></w-button>
    <w-button circle icon="download" type="warning"></w-button>
    <w-button circle icon="upload" type="danger"></w-button>
  </div>
</template>
```

:::

## 图标按钮

单独使用图标不添加文字来节省显示区域占用。

通过简单的配置自定义图标，或者改变图标相对文字位置。

查看更多图标（使用自定义方式）： https://icones.js.org/collection/ic

:::demo 使用`icon` 选择图标 

```vue
<template>
  <div>
    <div style="margin-bottom:20px;">
    <w-button icon="search" type="primary"></w-button>
    <w-button icon="delete" type="primary"></w-button>
    <w-button icon="add" type="primary">add</w-button>
    <w-button icon="download" type="primary">download</w-button>
    <w-button type="primary">upload 自定义图标<i class="i-ic-baseline-upload p-3"></i></w-button>
  </div>
</template>
```

:::

## 禁用状态

使用 `disabled` 属性来定义按钮是否被禁用。

该属性接受一个 `Boolean` 类型的值。

:::demo 

```vue
<template>
  <div style="margin-bottom:20px;">
    <w-button disabled>Default</w-button>
    <w-button disabled type="primary">Primary</w-button>
    <w-button disabled type="success">Success</w-button>
    <w-button disabled type="info">Info</w-button>
    <w-button disabled type="warning">Warning</w-button>
    <w-button disabled type="danger">Danger</w-button>
  </div>
</template>
```

:::
