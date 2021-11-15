import React, { ChangeEvent, KeyboardEvent, memo, RefObject, useCallback, useImperativeHandle, useRef } from "react"


export interface InputRef {
  focus: () => void
}

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  cbRef?: RefObject<InputRef>,
  className?: string
  value: string
  placeholder?: string
  disabled?: boolean
  autoFocus?: boolean
  onChangeFunction?: (value: string) => void
  onFocusFunction?: () => void
  onBlurFunction?: () => void
  onEnter?: (event: KeyboardEvent<HTMLInputElement>) => void
  allowedValueRegex?: RegExp
}

export const Input = memo(function Input(props: InputProps) {
  const {
    cbRef,
    className,
    value,
    placeholder,
    disabled,
    autoFocus,
    onChangeFunction,
    onFocusFunction,
    onBlurFunction,
    onEnter,
    allowedValueRegex,
    type,
    ...inputProps
  } = props

  const refInput = useRef<HTMLInputElement>(null)

  const isValueAllowed = useCallback((value: string) => {
    if (allowedValueRegex === undefined) {
      return true
    }
    return allowedValueRegex.test(value)
  }, [ allowedValueRegex ])

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (!isValueAllowed(value)) {
      event.preventDefault()
      return
    }
    if (onChangeFunction) {
      onChangeFunction(value)
    }
    inputProps.onChange && inputProps.onChange(event)
  }, [ isValueAllowed, onChangeFunction, inputProps.onChange ])

  const onFocus = useCallback(() => {
    if (onFocusFunction) {
      onFocusFunction()
    }
  }, [ onFocusFunction ])

  const onBlur = useCallback(function onBlur() {
    if (onBlurFunction) {
      onBlurFunction()
    }
  }, [ onBlurFunction, inputProps.onBlur ])

  const onKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEnter?.(event)
    }
    props.onKeyDown && props.onKeyDown(event)
  }, [ onEnter, props.onKeyDown ])

  const focus = useCallback(() => {
    refInput.current?.focus()
  }, [])

  useImperativeHandle(cbRef, () => ({
    focus: focus,
  }), [ cbRef, focus ])

  return (
    <input {...inputProps}
           ref={refInput}
           className={className}
           value={value}
           onChange={onChange}
           onBlur={onBlur}
           onFocus={onFocus}
           onKeyDown={onKeyDown}
           type={type}
           disabled={disabled}
           autoFocus={autoFocus}
           placeholder={placeholder}
    />
  )
}, )
