import styled from "styled-components";

export const ChatContainer = styled.div({
    width: '100%',
    height: '100vh',
    display: 'flex'
})

export const Nav = styled.div({
    width: '5%',
    height: '100%',
    backgroundColor: '#222c32'
})

export const Chats = styled.div({
    width: '40%',
    height: '100%',
    backgroundColor: '#131b20'
})

export const CurrentUserChat = styled.div({
    width: '100%',
    height: '10%',
    backgroundColor: '#222c32',
})

export const CurrentChatWrap = styled.div({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
})

export const StyledChatWindow = styled.div({
    height: '100%',
    width: '100%',
    padding: '35px',
    backgroundColor: '#0e151a',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
})

export const StyledForm = styled.div({
    height: '10%',
    width: '100%',
    backgroundColor: '#222c32',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 25px'
})

export const StyledInput = styled.input({
    width: '100%',
    backgroundColor: '#2d3941',
    borderWidth: '0',
    borderRadius: '9px',
    textDecoration: 'none',
    color: 'white',
    padding: '0 10px'
})

export const StyledSendButton = styled.button({
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15px',
    border: 'none',
    cursor: 'pointer',
})

export const StyledMessageItem = styled.div<{isMine: boolean}>(({isMine}) => ({
    position: 'relative',
    backgroundColor: '#265b4c',
    padding: '5px',
    borderRadius: isMine ? '5px 0 5px 5px' : '0 5px 5px 5px',
    wordBreak: 'break-word',
    maxWidth: '70%',
    alignSelf: isMine ? "end" : "start",
    "&:before": {
        content: "''",
        width: '10px',
        height: '10px',
        background: isMine ? 'linear-gradient(140deg, rgba(38,91,76,1) 50%, rgba(0,0,0,0) 50%)' : 'linear-gradient(220deg, rgba(38,91,76,1) 50%, rgba(0,0,0,0) 50%)',
        position: 'absolute',
        right: isMine ? '-10px': 'none',
        left: isMine ? 'none': '-10px',
        top: '0',

    }
}))
