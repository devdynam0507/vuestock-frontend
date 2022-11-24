<script lang="ts">
    import GoogleLogin from "../Buttons/GoogleLogin.svelte";
    import ImageComponent from "../Components/ImageComponent.svelte";
    import link from 'svelte-spa-router';
</script>

<main>
    <ImageComponent width={'384px'} height={'44px'} src={"images/logo.png"} alt={"logo"}/>
    <ImageComponent width={'551px'} height={'341px'} src={"images/landing.png"} alt={"landing"}/>
	<GoogleLogin/>
	<p id="info">관심 종목을 등록하고 한눈에 호가를 확인하고 알람 기능을 사용 하세요</p>
</main>

<style>
	main {
		display:         flex;
		flex-direction:  column;
		width: 			 100%;
		height:	 	     100%;
		justify-content: space-evenly;
		align-items: 	 center;
	}

	#info {
		font-size: medium;
		color: rgba(0, 0, 0, 0.3);
		user-select: none;
	}
</style>