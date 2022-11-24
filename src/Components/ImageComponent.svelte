<script lang="ts">
    export let src: string;
    export let width: string;
    export let height: string;
    export let alt: string;
</script>

<div width={width} height={height}>
    <img {src} {alt}/>
</div>