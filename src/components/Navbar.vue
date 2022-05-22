<template>
    <div>
        <div class="page-content p-1" id="content">
            <div class="">
                <b-navbar type="dark" class="separar">
                    <button id="sidebarCollapse" type="button" style="margin-left: 10px;" class="btn btn-light bg-white rounded-pill shadow-sm px-3"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold"></small></button>
                </b-navbar>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
    .separar{
        background-color: rgb(230, 230, 230);
        display: block;
        justify-content: space-around;
    }

</style>