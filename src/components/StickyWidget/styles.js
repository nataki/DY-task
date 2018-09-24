export default theme => ({
    sticky_button: {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
    },
    buttons_form: {
        position: 'fixed',
        bottom: '100px',
        width: '200px',
        right: '0',
        listStyle: 'none',
        '& li': {
            marginTop: '10px'
        }
    },
    content_area: {
        background: 'white',
        border: '10px solid orange',
        position: 'fixed',
        bottom: '100px',
        width: '500px',
        right: '200px'
    }
});