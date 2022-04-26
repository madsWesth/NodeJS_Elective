<script>
    import io from "socket.io-client"
    const socket = io()

    socket.on("changeTheColor", ({ data }) => {
        document.body.backgroundColor = data
    })

    const changeColor = (evt) => {
        socket.emit("colorChange", {data: evt.target.value})
    }
</script>

<input type="color" id="color-picker" on:change={changeColor}>