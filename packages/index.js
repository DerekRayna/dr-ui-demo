import drButton from "./drButton.vue";
import drDialog from "./drDialog.vue";
import drInput from "./drInput.vue";
import drSwitch from "./drSwitch.vue";
import drRadio from "./drRadio.vue";
import drRadioGroup from "./drRadioGroup.vue";
import drCheckBox from "./drCheckBox.vue";
import drCheckBoxGroup from "./drCheckBoxGroup.vue";
import drForm from "./drForm.vue";
import drFormItem from "./drFormItem.vue";

const components = [
    drButton,
    drDialog,
    drInput,
    drSwitch,
    drRadio,
    drRadioGroup,
    drCheckBox,
    drCheckBoxGroup,
    drForm,
    drFormItem
]

let install = function(Vue) {
    components.forEach((item) => {
        Vue.component(item.name, item)
    })
}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install
}

