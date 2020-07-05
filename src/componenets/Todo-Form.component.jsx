import React from 'react';

import { Button, TextField, FormControl, makeStyles, Container } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "20px",
        marginLeft: "400px"
    },
    btn: {
        marginTop: "10px"
    }

}))

const TodoForm = () => {
    const classes = useStyles()

    return (

        <Container className={classes.container}>
            <form fullWidth={true}>
                <FormControl>
                    <TextField label='I will do this' required={true} />
                    <Button className={classes.btn} color="primary" variant="contained" type="submit">
                        Add Todo
                    </Button>
                </FormControl>
            </form>

        </Container>
    );
}

export default TodoForm
