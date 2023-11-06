<template>
    <div class="popup__bg">
        <form class="popup" id="popUp">
            <div class="close-popup">X</div>
            <div>
                <label for="msgF">Фамилия</label>
                <input id="msgF" type="text" v-model="msgF" placeholder="Фамилия">
            </div>
            <div>
                <label for="msgN">Имя</label>
                <input id="msgN" type="text" v-model="msgN" placeholder="Имя">
            </div>
            <div>
                <label for="msgLN">Отчество</label>
                <input id="msgLN" type="text" v-model="msgLN" placeholder="Отчество">
            </div>
            <div>
                <label for="msgC">Любимый цвет</label>
                <input id="msgC" type="text" v-model="msgC" placeholder="Любимый цвет">
            </div>
            <div>
                <label for="msgP">Любимое животное</label>
                <input id="msgP" type="text" v-model="msgP" placeholder="Любимое животное">
            </div>           
            
            <button type="submit">Отправить</button>
        </form>
    </div>
    <button id="openPopUp" class="open-popup">Открыть попап</button>
</template>

<script>
export default {
    name: "PopUp",
    data() {
        return {
            msgF:'',
            msgN:'',
            msgLN:'',
            msgC:'',
            msgP:'',
            listWithObjects : []
        }

    },
    methods: {

    }
}
</script>