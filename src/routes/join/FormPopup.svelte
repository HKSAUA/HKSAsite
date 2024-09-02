<script>
    import { getContext } from 'svelte';

    const { success, message } = getContext('formSuccess');
    let showPopup = false;

    $: if (success) {
        showPopup = true;
        setTimeout(() => {
            showPopup = false;
        }, 3000); // Adjust popup duration as needed
    }
</script>

<div class="popup" style:display={showPopup ? 'block' : 'none'}>
    <p>{message}</p>
</div>