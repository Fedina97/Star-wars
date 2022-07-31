<template>
    <div class="typewriter">
        <h1>
            <slot></slot>
        </h1>
    </div>
</template>

<script>
export default {
    name: "HelloText"
}
</script>

<style scoped>
body {
    background: #222;
    padding-top: 5em;
    display: flex;
    justify-content: center;
}

.typewriter {
    position: absolute;
    bottom: 300px;
}
/* DEMO-SPECIFIC STYLES */
.typewriter h1 {
    color: #fff;
    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid #f6cf32; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation:
        typing 3.5s steps(30, end) 1 forwards,
        blink-caret .5s step-end;
}

/* The typing effect */
@keyframes typing {
    0% { width: 0 }
    100% {
        width: 100%;
    }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
    0%{
        border-color: transparent
    }
    50% {
        border-color: #f6cf32
    }
    100% {
        width: 0;
    }
}
</style>