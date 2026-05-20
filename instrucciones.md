# Guía de Configuración de Torneos (JSON)

Este documento sirve como referencia para crear y editar los archivos de torneo en `src/data/tournaments/`.

## 🚀 Crear un nuevo torneo
La forma más rápida de crear un nuevo torneo es:
1. Duplicar el archivo `001.json`.
2. Cambiar el nombre del archivo a un nuevo ID (ej. `002.json`).
3. Modificar los valores internos según las tablas a continuación.

---

## 📋 Definición de Campos

### 1. Información General
| Campo | Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| `id` | String | Identificador único del torneo. Debe coincidir con el nombre del archivo. | `"002"` |
| `name` | String | Nombre visible del torneo. | `"27 - I1"` |
| `date` | String | Fecha de inicio (YYYY-MM-DD). | `"2026-07-01"` |
| `dateEnd` | String | Fecha de finalización (YYYY-MM-DD). | `"2026-08-15"` |
| `tallyFormId` | String | ID del formulario de Tally. | `"FORM_ID"` |
| `infoMd` | String | Descripción en formato **Markdown**. Soporta negritas, enlaces y listas. | `"## Descripción\n...` |

### 2. Estados del Torneo (`status`)
Controla la etiqueta y el color del badge en la cabecera del torneo.

| Valor | Etiqueta en Web | Color/Estilo |
| :--- | :--- | :--- |
| `upcoming` | Próximo | Ghost (Gris) |
| `ongoing` | En curso | Active (Dorado/Brillante) |
| `finished` | Finalizado | Dark (Oscuro) |

### 3. Formato de Listas (`listUploadConfig`)
Controla qué se muestra en la pestaña **"Listas"**.

#### Campo `state` (Estado de la vista)
| Valor | Descripción | Vista que activa |
| :--- | :--- | :--- |
| `form_individual` | Formulario para jugadores individuales | Muestra el iframe de Tally. |
| `form_teams` | Formulario para equipos | Muestra el iframe de Tally. |
| `lists_individual` | Listado de jugadores individuales | Tabla con Nombre $\rightarrow$ Link a lista. |
| `lists_teams` | Listado de equipos | Bloques por equipo $\rightarrow$ Jugadores $\rightarrow$ Link. |

#### Otros campos de `listUploadConfig`
- `form.text`: Texto instructivo que aparece sobre el formulario.
- `form.tallyUrl`: URL del iframe de Tally.
- `form.title`: Título del iframe.
- `lists.individual`: Array de objetos `{ "name": "...", "link": "..." }`.
- `lists.teams`: Array de objetos `{ "teamName": "...", "players": [ { "name": "...", "link": "..." } ] }`.

---

## ⚔️ Estructura de Partidas

### Fase de Clasificación (`qualificationMatches`)
Es un array de rondas. Cada ronda tiene un número y una lista de enfrentamientos:
- `round`: Número de ronda (1, 2, 3...).
- `matches`: Lista de objetos con `player1`, `score1`, `player2`, `score2` y `winner` (nombre del ganador o `null`).

### Fase Final (`finalMatches`)
Similar a la clasificación, pero las rondas suelen tener nombres descriptivos:
- `round`: Nombre de la fase (ej. `"Cuartos de Final"`, `"Semifinales"`, `"Final"`).
- `matches`: Lista de enfrentamientos.

---

## 💡 Tips adicionales
- **Comentarios**: JSON no soporta comentarios estándar. Si necesitas dejar una nota, añade un campo temporal como `"__note": "Recuerda cambiar esto"`.
- **Fechas**: Asegúrate de usar siempre el formato `AAAA-MM-DD` para evitar errores de renderizado.