import React from 'react';

const Snackbar = (props) => {
    const { label } = props;
    if (!label) return null;
    const { type } = props;
    const containerColor = () => {
        switch(type) {
            case 'danger': return 'red';
            case 'success': return 'green';
            default: return'#555555';
        }
    };

    const styles = {
        container: {
            backgroundColor: containerColor(),
            marginTop: 10,
            width: 400,
            verticalAlign: 'center',
        },
        label: {
            color: 'white',
            lineHeight: 3,
            paddingLeft: 10,
        }
    }

    console.log("message", label, type);
    return (
        <div style={styles.container}>
            <label style={styles.label}>{label}</label>
        </div>
    );
}

export default Snackbar;