// 整个包的入口
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
// 统一导出
// 导入颜色选择器组件
import Button from './button'
import CheckboxGroup from './checkbox-group'
import Checkbox from './checkbox'
import Dialog from './dialog'
import FormItem from './form-item'
import Form from './form'
import Input from './input'
import RadioGroup from './radio-group'
import Radio from './radio'
import Switch from './switch'

const components = [
  Switch,
  Radio,
  RadioGroup,
  Input,
  Form,
  FormItem,
  Dialog,
  Checkbox,
  CheckboxGroup,
  Button
]

const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  //   console.log(123)
}

// 判断是否是直接引入文件，如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// export default install
export default {
  install
}
