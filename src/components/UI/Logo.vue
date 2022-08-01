<template>
    <div class="starwars-demo">
        <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" class="star">
        <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" class="wars">
    </div>
</template>

<script>
export default {
    name: "Logo"
}
</script>

<style scoped>
.star {
    animation: star 8s 1 ease-out;
}
.wars {
    animation: wars 8s 1 ease-out;
}

/* Keyframes */
@keyframes star {
    0% {
        opacity: 0;
        transform: scale(1.5) translateY(-0.75em);
    }
    20% {
        opacity: 1;
    }
    89% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 1;
    }
}

@keyframes wars {
    0% {
        opacity: 0;
        transform: scale(1.5) translateY(0.5em);
    }
    20% {
        opacity: 1;
    }
    90% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 1;
    }
}

@keyframes spin-letters {
    0%, 10% {
        opacity: 0;
        transform: rotateY(90deg);
    }
    30% {
        opacity: 1;
    }
    70%, 86% {
        transform: rotateY(0);
        opacity: 1;
    }
    95%, 100% {
        opacity: 0;
    }
}

@keyframes move-byline {
    0% {
        transform: translateZ(5em);
    }
    100% {
        transform: translateZ(0);
    }
}

.starwars-demo {
    perspective: 800px;
    transform-style: preserve3d;
    height: 17em;
    left: 50%;
    position: absolute;
    top: 53%;
    transform: translate(-50%, -50%);
    width: 34em;
}

img {
    width: 100%;
}

.star, .wars {
    position: absolute;
}

.star {
    top: -17.15em;
}

.wars {
    bottom: 16.5em;
}
</style>