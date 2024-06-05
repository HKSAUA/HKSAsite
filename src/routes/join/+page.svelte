<script>
    import Signup from "./Signup.svelte";
    import Modal from "$lib/Modal.svelte";

    let showModal = false;
</script>

<svelte:head>
    <title>Join us</title>
    <meta name="description" content="Join us" />
</svelte:head>
<body>
    <Signup/>
    <Modal bind:showModal>
        <div class="usageDisclosure">
            <div>
                <h3>Why do we need this info?</h3>
                <p>
                    We are collecting names, email addresses, and statuses from people who wish to join HKSA
                    as per some SGS regulations that I don't wanna find right now. <br>
                    we will only be using this information for the purposes of recordkeeping. An exhaustive
                    list of functions is as follows:<br>
                </p>
                <ol>
                    <li>Tracking who is in the organization, and whether or not they have paid a membership fee</li>
                    <li>Tracking which members have claimed and used exclusive discounts</li>
                </ol>
                <h3>How will this information be used?</h3>
                <p>
                    This information will be used strictly for purposes directly affiliated with HKSA internal operations,
                    or SGS operations. This information will not be shared, distributed, or sold (unless required by provincial
                    or federal law).
                </p>
            </div>
        </div>
    </Modal>
    <button on:click={() => (showModal = true)}><strong>Why do we need this info?</strong></button>
    <p>Already a member? <a href="/join">Join us here!</a></p>
</body>
