import styled from 'styled-components'
import cores from '../../Colors/color'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${cores.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const CampoInput = styled.input`
  padding: 0 16px;
  outline-color: ${cores.corPrincipal};
`

export const BtnPrimario = styled.button`
  background-color: ${cores.corPrincipal};
  border: 1px solid ${cores.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${cores.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
