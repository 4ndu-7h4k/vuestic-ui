import { VaCheckbox } from './'
import { VaButton } from '../va-button'

export default {
  title: 'VaCheckbox',
  component: VaCheckbox,
  tags:['autodocs'],
}

export const Default = () => ({
  components: { VaCheckbox },
  data: () => ({ value: true }),
  template: `
    <VaCheckbox v-model="value"/>
  `,
})

export const Stateful = () => ({
  components: { VaCheckbox },
  template: `
    [true]
    <VaCheckbox stateful/>
    [false]
    <VaCheckbox :stateful="false"/>
  `,
})

export const Color = () => ({
  components: { VaCheckbox },
  data: () => ({ value: true }),
  template: `
    <VaCheckbox 
      v-model="value" 
      color="warning"
    />
  `,
})

export const Label = () => ({
  components: { VaCheckbox },
  data: () => ({ value: true }),
  template: `
    <VaCheckbox 
      v-model="value"
      label="Checkbox"
    />
  `,
})

export const LeftLabel = () => ({
  components: { VaCheckbox },
  data: () => ({ value: true }),
  template: `
    <VaCheckbox 
      v-model="value"
      label="Checkbox"
      leftLabel
    />
  `,
})

export const CheckedIcon = () => ({
  components: { VaCheckbox },
  data: () => ({ value: true }),
  template: `
    <VaCheckbox 
      v-model="value"  
      checkedIcon="va-warning"
    />
  `,
})

export const Indeterminate = () => ({
  components: { VaCheckbox },
  data: () => ({ value: false }),
  template: `
    <VaCheckbox 
      v-model="value"  
      indeterminate
    />
  `,
})

export const IndeterminateIcon = () => ({
  components: { VaCheckbox },
  data: () => ({ value: false }),
  template: `
    <VaCheckbox 
      v-model="value"  
      indeterminate
      indeterminateIcon="va-warning"
    />
  `,
})

export const Disabled = () => ({
  components: { VaCheckbox },
  data: () => ({ value: true }),
  template: `
    <VaCheckbox 
      v-model="value" 
      disabled
    />
  `,
})

export const Readonly = () => ({
  components: { VaCheckbox },
  data: () => ({ value: true }),
  template: `
    <VaCheckbox 
      v-model="value" 
      readonly
    />
  `,
})

export const Messages = () => ({
  components: { VaCheckbox },
  data: () => ({ value: true }),
  template: `
    <VaCheckbox 
      v-model="value" 
      messages="Messages"
    />
  `,
})

export const Error = () => ({
  components: { VaCheckbox },
  data: () => ({ value: true }),
  template: `
    <VaCheckbox 
      v-model="value"
      error
    />
  `,
})

export const ErrorMessages = () => ({
  components: { VaCheckbox },
  data: () => ({ value: true }),
  template: `
    <VaCheckbox 
      v-model="value"
      error
      errorMessages="error"
    />
  `,
})

export const ErrorCount = () => ({
  components: { VaCheckbox },
  data: () => ({ value: true }),
  template: `
    <VaCheckbox 
      v-model="value"
      error
      :errorMessages="['error1', 'error2']"
      errorCount="2"
    />
  `,
})

export const Rules = () => ({
  components: { VaCheckbox },
  data: () => ({ value: false }),
  template: `
    <VaCheckbox 
      v-model="value"
      label="Rules"
      :rules="[value => !!value || 'required']"
    />
  `,
})

export const ImmediateValidation = () => ({
  components: { VaCheckbox },
  data: () => ({ value: false }),
  template: `
    <VaCheckbox 
      v-model="value"
      label="ImmediateValidation"
      :rules="[value => !!value || 'required']"
      immediateValidation
    />
  `,
})

export const Success = () => ({
  components: { VaCheckbox },
  data: () => ({ value: true }),
  template: `
    <VaCheckbox 
      v-model="value"
      :success="value"
      label="Success"
      messages="success"
    />
  `,
})

export const ArrayValue = () => ({
  components: { VaCheckbox },
  data: () => ({ value: [ 'One', 'Two' ] }),
  template: `
    <VaCheckbox 
      v-model="value"
      array-value="One"
      label="One"
    />
    <VaCheckbox 
      v-model="value"
      array-value="Two"
      label="Two"
    />
    <VaCheckbox 
      v-model="value"
      array-value="Three"
      label="Three"
    />
    {{ value }}
  `,
})

export const TrueValue = () => ({
  components: { VaCheckbox },
  data: () => ({ value: "One" }),
  template: `
    <VaCheckbox 
      v-model="value" 
      trueValue="One"
    />
    {{ value }}
  `,
})

export const FalseValue = () => ({
  components: { VaCheckbox },
  data: () => ({ value: "One" }),
  template: `
    <VaCheckbox 
      v-model="value" 
      falseValue="One"
    />
    {{ value }}
  `,
})

export const IndeterminateValue = () => ({
  components: { VaCheckbox },
  data: () => ({ value: "One" }),
  template: `
    <VaCheckbox 
      v-model="value" 
      indeterminate
      indeterminateValue="One"
    />
    {{ value }}
  `,
})