function recursiva(max) {
    console.log(max);

    if(max >= 100) return;
    max++;
    recursiva(max);
}

recursiva(0);

//é o mecanismo básico para repetições no js