import styled from "styled-components";

export const StyledDialog = styled.dialog(({open}) => ({
    display: open ? 'flex' : 'none',
    width: '800px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    backgroundColor: '#131b20',
    padding: '20px',
}))

export const StyledInput = styled.input({
    width: '100%',
    border: 'none',
    backgroundColor: '#2d3941',
    color: 'white',
    borderRadius: '9px',
    padding: '0 10px',
    height: '40px',
})

export const StyledButton = styled.button({
    width: '50%',
    height: '40px',
    cursor: 'pointer',
    backgroundColor: '#7f8b94',
    border: 'none',
    borderRadius: '9px'
})