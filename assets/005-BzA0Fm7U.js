const a="005",e="Armaggedon - E2",s="07-12-2026",o="10-01-2027",n="upcoming (Próximo), ongoing (En curso), finished (Finalizado)",t="upcoming",i="Equipos",r="FORM_ID",l="Es lo que se ve en la página info.jsx",d=`## Descripción
**Armaggedon - E2** torneo por equipos de 4 jugadores, utilizando las reglas de 11ª edición.

## Fechas y recursos
- **Inscripciones**: 07/12/2026-13/12/2026
- **Rondas (4)**: 14/12/2026-10/01/2027

Cada equipo dispone de una semana por ronda para acordar y disputar sus partidas.

### Recursos
- 📋 **Listas de ejército** — publicadas al inicio de la fase clasificatoria en la pestaña de *Listas*.
- 🎲 **Mesa para las partidas** - [*aquí*](https://steamcommunity.com/sharedfiles/filedetails/?id=3398190636)

## Estructura del torneo
El torneo se dividirá en **cuatro rondas**.
- Los equipos dispondrán de cuatro semanas para realizar los emparejamientos y disputar todas las partidas.
- Puntuación: **3 pts** victoria, **1 pts** por empate (*a 6 BP o menos del empate, que es 40-40*) y **0 pts** por derrota.`,c={_COMENTARIO_valores_state:"form_individual, form_teams, lists_individual, lists_teams",state:"lists_teams",form:{text:"Presenta la lista de tu equipo antes del inicio del torneo. El envío es gestionado a través del siguiente formulario:",tallyUrlIndividual:"https://tally.so/embed/NpM5Ej?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",tallyUrlTeams:"https://tally.so/embed/vGEbed?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",title:"Formulario de lista para Armaggedon - E2"},lists:{individual:[],teams:[]}},u=[],p=[],m="Esqueleto de la pestaña Partidas (partidas individuales por ronda). Los emparejamientos los deciden los equipos (defensor/atacante/campeón), no vienen prefijados. Orden actual: por cada cruce de qualificationMatches en orden hay 4 slots seguidos (4 por cruce). Cómo rellenar: pon en player1/player2 los nombres EXACTOS de listUploadConfig.lists.teams (players[].name), luego score1/score2 con el resultado y winner con el nombre exacto del ganador o null si es empate.",g={player1:"NombreJugadorEquipoA",score1:12,player2:"NombreJugadorEquipoB",score2:8,winner:"NombreJugadorEquipoA"},E="1) Busca la Ronda N en finalMatches. 2) Localiza el bloque de 4 del cruce: matches 0-3 = cruce 1 de qualificationMatches de la ronda N, 4-7 = cruce 2, 8-11 = cruce 3, etc. 3) Escribe player1/player2 (nombres exactos), score1/score2 y winner (ganador o null). 4) Al terminar valida que el JSON sigue siendo válido.",f=[],_={id:a,name:e,date:s,dateEnd:o,_COMENTARIO_valores_status:n,status:t,format:i,tallyFormId:r,_COMENTARIO_infoMd:l,infoMd:d,listUploadConfig:c,groups:u,qualificationMatches:p,_COMENTARIO_finalMatches:m,_EJEMPLO_match:g,_COMO_RELLENAR:E,finalMatches:f};export{m as _COMENTARIO_finalMatches,l as _COMENTARIO_infoMd,n as _COMENTARIO_valores_status,E as _COMO_RELLENAR,g as _EJEMPLO_match,s as date,o as dateEnd,_ as default,f as finalMatches,i as format,u as groups,a as id,d as infoMd,c as listUploadConfig,e as name,p as qualificationMatches,t as status,r as tallyFormId};
