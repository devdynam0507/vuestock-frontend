
<style>
    .card-input-container {
        display: flex;
        flex-direction: column;
    }

    .card-input-container #info {
        font-size: small;
        color: rgba(0, 0, 0, 0.4);
    }

    .card-input-container input {
        color: rgba(0, 0, 0, 0.4);
        border: 0; 
        padding: 7px 0; 
        margin: 0;
        border-bottom: 0.5px solid #ccc;
    }

    .card-input-container input::placeholder {
        color: rgba(0, 0, 0, 0.2);
    }

    .card-input-container input:focus {
        outline: none;
    }

    .card-input-container input ~ .focus-border {
        position: relative; 
        bottom: 0;
        left: 0;
        width: 0; 
        height: 1px; 
        background-color: #3399FF; 
        transition: 0.4s;
    }

    .card-input-container input:focus ~ .focus-border { 
        outline: none;
        width: 100%; 
        transition: 0.4s;
    }
</style>

<div class="card-input-container">
    <p id="info">알림 희망 가격</p>
    <input type="text" placeholder="가격을 입력하세요.">
    <span class="focus-border"></span>
</div>