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

.typewriter h1 {
    color: #fff;
    font-family: monospace;
    overflow: hidden;
    border-right: .15em solid #f6cf32;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation:
        typing 3.5s steps(30, end) 1 forwards,
        blink-caret .5s step-end;
}

@keyframes typing {
    0% { width: 0 }
    100% {
        width: 100%;
    }
}

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