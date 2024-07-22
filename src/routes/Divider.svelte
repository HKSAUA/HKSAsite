<script>
    import { onMount } from "svelte";
    
    let fontSize = 20; // Adjust initial font size

    onMount(() => {
        const updateFontSize = () => {
            const width = window.innerWidth;
            // Define logic to adjust font size based on width (e.g., increase for wider screens)
            fontSize = Math.min(width / 10, 30); // Adjust calculation as needed
        }
        window.addEventListener('resize', updateFontSize);
    });
    
</script>

<style>
.section-divider {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5rem; /* Adjust height as needed */
        background-color: #E6AD37;
        width:100%;
        margin:0;
        white-space: nowrap;
        padding:0%;
        box-sizing: border-box;
    }

</style>

<div class="section-divider">
    <span style="font-size: {fontSize}px; color: #0F3446;"><strong>This is the repeating text</strong></span>
</div>
