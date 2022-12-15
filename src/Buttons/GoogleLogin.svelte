<script lang="ts">
    let src = 'images/google-signin.png';

    function login() {
        location.href = 'http://api.stockvue.kr:8080/oauth2/authorization/google'
    }
</script>

<style>
    #login-button {
		cursor: pointer;
        padding: 0;
        margin: 0;
        width: fit-content;
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
	}
</style>

<button id="login-button" on:click={() => login()}>
    <img {src} alt="google"/>
</button>
