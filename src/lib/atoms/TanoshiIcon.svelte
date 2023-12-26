<script lang="ts">
    import { TanoshiIconModel } from 'tanoshi-models'
	import 'iconify-icon';

    export let tanoshiIconModel: TanoshiIconModel;

</script>

<iconify-icon 
    icon="{tanoshiIconModel.content}" 
    height="{tanoshiIconModel.height}px"
    width="{tanoshiIconModel.width}px"
    class="{tanoshiIconModel.theme}"
    style="{$$props.style}"
/>

<style>

    iconify-icon.black {
        color: rgba(var(--black));
    }

    iconify-icon.icon-black {
        color: rgba(var(--icon-black));
    }

    iconify-icon.white {
        color: rgba(var(--white));
    }

    iconify-icon.icon-white {
        color: rgba(var(--icon-white));
    }

    iconify-icon.primary {
        color: rgba(var(--primary));
    }

    iconify-icon.icon-primary {
        color: rgba(var(--icon-primary));
    }

    iconify-icon.secondary {
        color: rgba(var(--secondary));
    }

    iconify-icon.icon-secondary {
        color: rgba(var(--icon-secondary));
    }

    iconify-icon.success {
        color: rgba(var(--success));
    }

    iconify-icon.icon-success {
        color: rgba(var(--icon-success));
    }

    iconify-icon.danger {
        color: rgba(var(--danger));
    }

    iconify-icon.icon-danger {
        color: rgba(var(--icon-danger));
    }

    iconify-icon.warning {
        color: rgba(var(--warning));
    }

    iconify-icon.icon-warning {
        color: rgba(var(--icon-warning));
    }

    iconify-icon.info {
        color: rgba(var(--info));
    }

    iconify-icon.icon-info {
        color: rgba(var(--icon-info));
    }
</style>