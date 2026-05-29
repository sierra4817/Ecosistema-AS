// Dynamic Course Manager - Visión Trading Pro (30-Day Intensive)

// 30 Days Syllabus Data
const courseData = {
  day1: {
    id: "day1",
    pilar: 1,
    title: "El Precio es lo Único que Importa",
    unlocked: true,
    completed: false,
    challenge: "Identifica y documenta un sesgo de falsas expectativas que hayas tenido en tu operativa reciente o en tu fase de aprendizaje.",
    content: `
      <p>Comenzamos el <strong>Módulo 1: Mentalidad Ganadora</strong>. Como trader estoico, debes grabarte esta regla de oro: <strong>el precio es lo único que importa</strong>. El mercado no sabe quién eres, cuánto dinero necesitas, ni qué opinas sobre la economía mundial.</p>
      <h3>Desmitificando Sesgos y Expectativas</h3>
      <p>El principal enemigo del operador novato es su propia mente. Las falsas expectativas de dinero fácil y rápido deforman la realidad. Creer que el mercado se mueve de forma injusta o que el precio \"debe\" rebotar en un soporte es un error cognitivo destructivo.</p>
      <ul>
        <li><strong>Aceptación del Precio:</strong> El precio actual es la verdad objetiva del mercado. Si el precio sube contra tu posición corta, tu opinión es errónea, no el precio.</li>
        <li><strong>Desapego de Opiniones:</strong> No intentes tener la razón; busca ser rentable operando lo que ves, no lo que crees.</li>
      </ul>
      <div class="alert-box">
        <strong>📈 Regla Estoica:</strong> Controla tus reacciones internas. El mercado es un reflejo de flujos de capital, no una entidad que conspira contra ti.
      </div>
    `
  },
  day2: {
    id: "day2",
    pilar: 1,
    title: "Sesgos Cognitivos en el Trading",
    unlocked: false,
    completed: false,
    challenge: "Identifica y documenta un sesgo cognitivo propio (como el sesgo de confirmación o de aversión a la pérdida) durante tu análisis de mercado.",
    content: `
      <p>Hoy analizaremos los <strong>sesgos cognitivos</strong>. Son atajos mentales que nuestro cerebro utiliza de forma automática, pero que en el trading resultan fatales para el capital operativo.</p>
      <h3>Sesgos Principales</h3>
      <ul>
        <li><strong>Sesgo de Aversión a la Pérdida:</strong> Dolor desproporcionado ante una pérdida que te lleva a mover tu Stop Loss esperando un milagro.</li>
        <li><strong>Sesgo de Reciente:</strong> Darle más importancia a los resultados de las últimas operaciones, modificando tu estrategia tras solo 2 fallos consecutivos.</li>
      </ul>
      <p>Un trader pragmático neutraliza los sesgos utilizando reglas escritas y una bitácora objetiva.</p>
    `
  },
  day3: {
    id: "day3",
    pilar: 1,
    title: "La Ilusión de la Certeza",
    unlocked: false,
    completed: false,
    challenge: "Escribe en tu bitácora por qué una operación individual con setup perfecto puede ser perdedora y cómo afecta esto a tu mentalidad.",
    content: `
      <p>El mercado es un <strong>entorno de probabilidades, no de certezas</strong>. Cada operación individual tiene un resultado aleatorio e independiente de las anteriores.</p>
      <h3>La Distribución de Resultados</h3>
      <p>Incluso con un sistema de trading que tenga un 60% de acierto estadístico a largo plazo, es matemáticamente posible (y normal) experimentar rachas de 4 o 5 operaciones perdedoras consecutivas sin que el sistema esté roto.</p>
    `
  },
  day4: {
    id: "day4",
    pilar: 1,
    title: "Anatomía de la Manipulación de Mercado",
    unlocked: false,
    completed: false,
    challenge: "Busca en tu gráfico un caso de rompimiento falso (caza de stops) y documenta cómo reaccionó el precio tras atrapar a los operadores ansiosos.",
    content: `
      <p>Para no ser la presa, debes entender cómo opera el cazador. La manipulación de mercado no es una conspiración, sino la necesidad de <strong>liquidez institucional</strong>.</p>
      <h3>Trampas Técnicas y Caza de Liquidez</h3>
      <p>Los grandes participantes (bancos, fondos de cobertura) necesitan contrapartida para llenar sus órdenes masivas. Para comprar barato, inducen a los traders minoristas a vender rompiendo soportes de manera temporal para activar sus stops (que son órdenes de venta de mercado), absorbiendo toda esa liquidez para iniciar el movimiento alcista real.</p>
    `
  },
  day5: {
    id: "day5",
    pilar: 1,
    title: "Entendiendo el Short Squeeze",
    unlocked: false,
    completed: false,
    challenge: "Explica en tus palabras la mecánica de un Short Squeeze y por qué está prohibido intentar adivinar el techo de un movimiento parabólico.",
    content: `
      <p>El <strong>Short Squeeze</strong> es un ejemplo clásico de manipulación y pánico técnico. Ocurre cuando un gran número de vendedores en corto se ven obligados a cerrar sus posiciones de manera simultánea.</p>
      <h3>La Cascada de Compras Forzadas</h3>
      <p>Dado que cerrar una posición en corto requiere una orden de compra, el pánico de los vendedores y la ejecución de sus Stop Losses empujan el precio exponencialmente al alza, barriendo a cualquiera que intente buscar techos sin confluencias estructurales.</p>
    `
  },
  day6: {
    id: "day6",
    pilar: 1,
    title: "Identificación de Trampas y Fakeouts",
    unlocked: false,
    completed: false,
    challenge: "Describe la diferencia visual en un gráfico entre una vela de ruptura institucional limpia y una vela que solo cazó liquidez (fakeout).",
    content: `
      <p>Los <strong>Fakeouts</strong> (falsos rompimientos) ocurren constantemente en zonas obvias de soporte y resistencia. Aprender a identificarlos evita entrar tarde al mercado.</p>
      <h3>Mecánica de la Trampa</h3>
      <p>Si el precio perfora un nivel clave pero cierra rápidamente dentro del rango previo dejando una mecha larga, estamos ante un rechazo por absorción institucional. Los operadores profesionales esperan la vela de confirmación en lugar de comprar o vender impulsivamente la ruptura de la línea.</p>
    `
  },
  day7: {
    id: "day7",
    pilar: 1,
    title: "Evaluación y Manifiesto de Mentalidad",
    unlocked: false,
    completed: false,
    challenge: "Escribe tu compromiso mental: declara que aceptas el resultado probabilístico del mercado y define qué sesgo vas a monitorizar esta semana.",
    content: `
      <p>Felicidades por completar el Módulo 1. Has aprendido que el precio es lo único real y has analizado los mecanismos de manipulación y sesgos que destruyen al trader aficionado.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 1:</strong> Responde correctamente el cuestionario de abajo para certificar tu comprensión y desbloquear el Módulo de Gestión y Disciplina.
      </div>
    `
  },
  day8: {
    id: "day8",
    pilar: 2,
    title: "Matemáticas del Trader Profesional",
    unlocked: false,
    completed: false,
    challenge: "Calcula la ruina matemática de una cuenta de $10,000 arriesgando el 10% por operación frente al 1% en una racha de 10 operaciones fallidas.",
    content: `
      <p>Iniciamos el <strong>Módulo 2: Gestión y Disciplina</strong>. El trading no es un arte; es un negocio de <strong>estadística y matemáticas aplicadas</strong>.</p>
      <h3>La Preservación del Capital</h3>
      <p>Tu capital es tu inventario de trabajo. Si arriesgas el 1% por operación, necesitas 100 operaciones perdedoras consecutivas para quebrar. Si arriesgas el 10%, con solo 10 operaciones perdedoras (un suceso estadísticamente probable en cualquier sistema) estarás fuera del negocio de forma permanente.</p>
    `
  },
  day9: {
    id: "day9",
    pilar: 2,
    title: "Asimetría Matemática y Ratio R:R",
    unlocked: false,
    completed: false,
    challenge: "Si realizas 20 operaciones arriesgando $100 por trade con un R:R 1:2, y ganas 8 operaciones (40% acierto) y pierdes 12, calcula tu beneficio neto.",
    content: `
      <p>No necesitas acertar el 90% de tus operaciones para ser rentable. La clave está en la <strong>asimetría de los ratios de Riesgo/Beneficio (R:R)</strong>.</p>
      <h3>La ventaja de un R:R 1:2</h3>
      <p>Con un ratio de 1:2, cada acierto paga el doble de lo que cuesta cada pérdida. Esto te permite tener un balance positivo a largo plazo incluso ganando menos de la mitad de tus operaciones.</p>
    `
  },
  day10: {
    id: "day10",
    pilar: 2,
    title: "El Límite de Pérdida Diaria (Drawdown)",
    unlocked: false,
    completed: false,
    challenge: "Establece tu regla inquebrantable de Drawdown diario: define en dinero cuánto es tu límite diario y escribe tu protocolo de apagado inmediato.",
    content: `
      <p>El <strong>Daily Drawdown</strong> o Límite de Pérdida Diaria es el sistema de seguridad de tu cuenta. Evita que un día de frustración o falta de sincronización destruya tu capital de meses.</p>
      <h3>La Regla de las Dos Pérdidas</h3>
      <p>Si ejecutas dos operaciones fallidas en la misma sesión, la regla estoica dicta que debes cerrar la plataforma inmediatamente. El mercado estará ahí mañana; tu capital, si continúas operando con sesgos emocionales, probablemente no.</p>
    `
  },
  day11: {
    id: "day11",
    pilar: 2,
    title: "La Bitácora de Trading",
    unlocked: false,
    completed: false,
    challenge: "Documenta en tu bitácora una operación simulada (o real) reciente siguiendo estrictamente tus reglas de gestión: capital, riesgo exacto y R:R.",
    content: `
      <p>Lo que no se mide no se puede mejorar. La <strong>Bitácora de Trading</strong> es el registro histórico de tu comportamiento frente al mercado.</p>
      <h3>El Espejo del Trader</h3>
      <p>Un sistema repetible se construye documentando cada entrada, salida, emociones sentidas y el cumplimiento o violación de las reglas. Esto transforma un pasatiempo en una profesión auditable.</p>
    `
  },
  day12: {
    id: "day12",
    pilar: 2,
    title: "Cómo Documentar Procesos Operativos",
    unlocked: false,
    completed: false,
    challenge: "Registra en tu diario de trading los costos de comisiones y el deslizamiento (slippage) estimado de tu última operación simulada.",
    content: `
      <p>Una bitácora técnica no solo registra si ganaste o perdiste dinero; registra la calidad de tu <strong>proceso de toma de decisiones</strong>.</p>
      <h3>Parámetros de Auditoría</h3>
      <ul>
        <li><strong>Desviación del Plan:</strong> ¿Operaste por impulso o por setup?</li>
        <li><strong>Ejecución del Stop:</strong> ¿Respetaste el Stop Loss original o lo moviste en contra?</li>
        <li><strong>Comisiones y Slippage:</strong> El costo de comisiones es el costo de hacer negocios; debes medirlo para evaluar tu rentabilidad neta real.</li>
      </ul>
    `
  },
  day13: {
    id: "day13",
    pilar: 2,
    title: "Construcción de un Sistema Repetible",
    unlocked: false,
    completed: false,
    challenge: "Describe por qué operar de forma aleatoria (cambiando reglas cada día) impide obtener una ventaja estadística válida.",
    content: `
      <p>La consistencia no proviene de predecir el futuro; proviene de <strong>ejecutar un proceso repetible</strong> con disciplina de máquina.</p>
      <h3>La Consistencia Operativa</h3>
      <p>Un sistema repetible requiere que las condiciones de entrada y de salida sean idénticas en cada trade. Si cambias de indicadores o de reglas de riesgo cada vez que pierdes, nunca sabrás si tu ventaja estadística realmente funciona a lo largo de una muestra representativa de operaciones.</p>
    `
  },
  day14: {
    id: "day14",
    pilar: 2,
    title: "Cálculo Dinámico de Contratos",
    unlocked: false,
    completed: false,
    challenge: "Si tu cuenta tiene $5,000, arriesgas el 1% ($50) y tu Stop Loss en MES está a 10 puntos ($5 por punto por contrato), ¿cuántos contratos debes operar?",
    content: `
      <p>El tamaño de tu posición nunca debe ser al azar o basarse en el sentimiento. Se calcula matemáticamente antes de cada trade.</p>
      <h3>Fórmula de Posición</h3>
      <div class="highlight-box">
        <strong>Contratos = Riesgo en Dólares / (Distancia de Stop Loss en Puntos x Valor del Punto del Contrato)</strong>
      </div>
      <p>Si la distancia de tu Stop Loss técnico es mayor, debes reducir el número de contratos para que el riesgo financiero siga siendo exactamente el mismo.</p>
    `
  },
  day15: {
    id: "day15",
    pilar: 2,
    title: "Evaluación de Gestión y Riesgo",
    unlocked: false,
    completed: false,
    challenge: "Firma tu manifiesto de riesgo y define tu riesgo máximo por operación (%) y tu límite de pérdida diario en dólares.",
    content: `
      <p>Has finalizado el Módulo 2. Ahora comprendes la naturaleza matemática del trading, el cálculo de posición, la asimetría R:R y la bitácora técnica de procesos.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 2:</strong> Aprueba el cuestionario de gestión de riesgo abajo para desbloquear el Módulo de Estrategia Técnica.
      </div>
    `
  },
  day16: {
    id: "day16",
    pilar: 3,
    title: "Estructura de Mercado Real",
    unlocked: false,
    completed: false,
    challenge: "Dibuja o identifica en tu simulador una serie de Máximos más Altos (HH) y Mínimos más Altos (HL) en una tendencia alcista.",
    content: `
      <p>Comenzamos el <strong>Módulo 3: Estrategia de Alta Probabilidad</strong>. Aprenderemos a leer el mercado de forma limpia, directa y <strong>sin indicadores de ruido</strong>.</p>
      <h3>La Subasta Continua</h3>
      <p>El mercado es una subasta. La estructura nos muestra quién tiene el control: si la tendencia hace máximos y mínimos ascendentes, los compradores dominan la subasta; si hace máximos y mínimos descendentes, los vendedores tienen el control.</p>
    `
  },
  day17: {
    id: "day17",
    pilar: 3,
    title: "Ruptura de Estructura (BOS)",
    unlocked: false,
    completed: false,
    challenge: "Busca en el gráfico en vivo un cambio de tendencia marcado por un quiebre de estructura (BOS) y documenta los precios de los niveles rotos.",
    content: `
      <p>El <strong>BOS (Break of Structure)</strong> es el primer indicio de un cambio en la dirección de la subasta de precios.</p>
      <h3>Mecánica del BOS</h3>
      <p>En una tendencia alcista, el último Mínimo Ascendente (HL) es el nivel de defensa de los compradores. Si el precio rompe y cierra por debajo de este nivel, la estructura alcista se invalida, dando paso a una probable estructura bajista (BOS bajista).</p>
    `
  },
  day18: {
    id: "day18",
    pilar: 3,
    title: "Soportes y Resistencias de Valor",
    unlocked: false,
    completed: false,
    challenge: "Identifica en el gráfico de futuros una zona donde el precio haya rebotado al menos dos veces con fuerte volumen y márcala como zona de valor.",
    content: `
      <p>Los soportes y resistencias no son líneas delgadas en el gráfico; son <strong>zonas de acumulación de órdenes</strong> institucionales pendientes por ejecutar.</p>
      <h3>Zonas de Oferta y Demanda</h3>
      <p>Un soporte de valor se localiza en el origen de un fuerte movimiento alcista previo. Buscamos operar en estas zonas porque la probabilidad de que los grandes participantes defiendan sus posiciones es altamente favorable.</p>
    `
  },
  day19: {
    id: "day19",
    pilar: 3,
    title: "Acción del Precio Pura",
    unlocked: false,
    completed: false,
    challenge: "Realiza un análisis completo del activo actual en el simulador basándote únicamente en la estructura y la acción del precio actual sin indicadores.",
    content: `
      <p>Llenar tu pantalla de indicadores como Bandas de Bollinger, MACD o Estocásticos solo añade retraso y parálisis por análisis. El precio es el único indicador líder en tiempo real.</p>
      <h3>La Lectura Limpia</h3>
      <p>Operar con el precio puro consiste en observar la interacción entre impulsos, retrocesos, velocidad de las velas y zonas de liquidez para tomar decisiones rápidas y precisas.</p>
    `
  },
  day20: {
    id: "day20",
    pilar: 3,
    title: "La Ley de Polaridad S/R",
    unlocked: false,
    completed: false,
    challenge: "Encuentra en el simulador un ejemplo de resistencia que, tras ser rota con intención, haya actuado como soporte. Anota los precios del testeo.",
    content: `
      <p>La <strong>Ley de Polaridad</strong> demuestra la memoria del mercado y el comportamiento del flujo de órdenes.</p>
      <h3>Soporte convertido en Resistencia</h3>
      <p>Cuando un soporte fuerte es perforado, los compradores atrapados esperan a que el precio regrese a su nivel de entrada para cerrar sus posiciones con pérdidas nulas (breakeven). Ese cierre de posiciones vendedoras, sumado a nuevos vendedores, transforma el antiguo soporte en resistencia.</p>
    `
  },
  day21: {
    id: "day21",
    pilar: 3,
    title: "Filtros Técnicos de Confluencia",
    unlocked: false,
    completed: false,
    challenge: "Utilizando la EMA 200 y el RSI 14, identifica si el precio cotiza en zona de compras o ventas y anota la señal del oscilador de momentum.",
    content: `
      <p>Aunque operamos basados en acción de precio, el Setup de confluencia Visión Pro utiliza dos filtros complementarios para validar el momentum.</p>
      <ul>
        <li><strong>Filtro de Tendencia (EMA 200):</strong> Si el precio está sobre la EMA 200, la subasta es alcista (solo buscamos compras). Si está bajo ella, es bajista (solo cortos).</li>
        <li><strong>Filtro de Momentum (RSI 14):</strong> Confirmamos el impulso cuando el RSI cruza la línea central de 50 a favor de la tendencia.</li>
      </ul>
    `
  },
  day22: {
    id: "day22",
    pilar: 3,
    title: "Evaluación de Lectura Técnica",
    unlocked: false,
    completed: false,
    challenge: "Explica detalladamente en tu bitácora por qué un gráfico sin indicadores de ruido mejora la toma de decisiones bajo presión.",
    content: `
      <p>Has finalizado el Módulo 3. Conoces las estructuras de mercado, los quiebres (BOS), la polaridad y los filtros de confluencia técnica para una lectura limpia de precios.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 3:</strong> Completa y aprueba el cuestionario técnico de abajo para desbloquear el Módulo de Ejecución y Autocontrol Mental.
      </div>
    `
  },
  day23: {
    id: "day23",
    pilar: 4,
    title: "Rutina y Protocolo del Trader",
    unlocked: false,
    completed: false,
    challenge: "Diseña por escrito tu rutina diaria antes de la sesión de trading: horas de sueño, preparación física, revisión de noticias y análisis técnico previo.",
    content: `
      <p>Comenzamos el <strong>Módulo 4: Ejecución y Evaluación</strong>. Un trader profesional se comporta como un atleta de alto rendimiento: tiene una rutina rígida antes, durante y después de operar.</p>
      <h3>La Disciplina del Protocolo</h3>
      <p>Operar de manera profesional requiere estar en un estado mental calmado y descansado. Improvisar la sesión o abrir gráficos minutos antes de la apertura del mercado invita al desastre operativo.</p>
    `
  },
  day24: {
    id: "day24",
    pilar: 4,
    title: "El Protocolo Pre-market y Checklist",
    unlocked: false,
    completed: false,
    challenge: "Escribe una lista de comprobación (checklist) de 5 puntos obligatorios que debes marcar de manera positiva antes de abrir cualquier operación en real.",
    content: `
      <p>Antes de que un piloto despegue, revisa una checklist exhaustiva. En el trading de futuros, debes hacer exactamente lo mismo.</p>
      <h3>Checklist de Confluencias</h3>
      <ul>
        <li>¿El precio está alineado con la EMA 200?</li>
        <li>¿El RSI cruzó la línea central de 50 en vela cerrada?</li>
        <li>¿El Stop Loss está colocado en un nivel estructural válido?</li>
        <li>¿El tamaño de posición respeta el 1% de riesgo máximo?</li>
      </ul>
    `
  },
  day25: {
    id: "day25",
    pilar: 4,
    title: "Ejecución bajo Presión",
    unlocked: false,
    completed: false,
    challenge: "Realiza 5 operaciones en el simulador y documenta tu nivel de calma del 1 al 10 antes de hacer clic en los botones de COMPRAR o VENDER.",
    content: `
      <p>Cuando el precio oscila rápido, tu cerebro entra en modo de alerta. El control emocional bajo presión consiste en <strong>confiar en el proceso matemático</strong> y no en el resultado del trade actual.</p>
      <h3>Aceptación del Riesgo</h3>
      <p>Si has calculado tu tamaño de posición correctamente y has colocado tu stop loss técnico, ya sabes exactamente cuánto vas a perder si falla. Una vez que aceptas esa pérdida como el costo de tu negocio, la ansiedad de la ejecución desaparece.</p>
    `
  },
  day26: {
    id: "day26",
    pilar: 4,
    title: "Protocolo de Cierre Post-Sesión",
    unlocked: false,
    completed: false,
    challenge: "Describe tu protocolo de cierre: ¿qué haces inmediatamente después de terminar tu sesión de trading para desconectar mentalmente?",
    content: `
      <p>El día de trading no termina cuando cierras tu última posición. Termina con tu protocolo de cierre estoico.</p>
      <h3>Desconexión Mental</h3>
      <p>Guarda tus resultados, documenta la sesión en tu bitácora, cierra la plataforma y aléjate de los gráficos. Analizar pantallas constantemente fuera de tu horario operativo fomenta la obsesión y el sobreoperar.</p>
    `
  },
  day27: {
    id: "day27",
    pilar: 4,
    title: "Auditoría Crítica de Operaciones",
    unlocked: false,
    completed: false,
    challenge: "Revisa tu bitácora de la semana pasada, analiza tu tasa de acierto y tu ratio R:R real. Anota cualquier desviación de tu plan de trading.",
    content: `
      <p>La auditoría es el análisis racional y frío de tus estadísticas operativas. Nos permite identificar si nuestra rentabilidad está alineada con la ventaja estadística del sistema.</p>
      <h3>Estadísticas de Valor</h3>
      <ul>
        <li><strong>Profit Factor:</strong> Suma de ganancias dividida por la suma de pérdidas.</li>
        <li><strong>R:R Promedio:</strong> Determina si de verdad estás dejando correr las operaciones ganadoras a 1:2.</li>
      </ul>
    `
  },
  day28: {
    id: "day28",
    pilar: 4,
    title: "El Diario de Errores Operativos",
    unlocked: false,
    completed: false,
    challenge: "Clasifica los últimos 5 errores cometidos en tu simulador como \"técnico\" (romper reglas del setup) o \"emocional\" (entrar por impaciencia o venganza).",
    content: `
      <p>Errar es humano, pero repetir el mismo error operativo por falta de autoanálisis es inaceptable en un trader profesional.</p>
      <h3>El Registro de Desviaciones</h3>
      <p>Mantén un diario específico de errores. Al clasificarlos de manera honesta y objetiva, sabrás con precisión si tu problema actual es la lectura del mercado (error técnico) o la falta de autodisciplina (error emocional).</p>
    `
  },
  day29: {
    id: "day29",
    pilar: 4,
    title: "Mejora Continua Estoica",
    unlocked: false,
    completed: false,
    challenge: "Define una medida correctiva específica y procesable para el error más frecuente (técnico o emocional) que hayas detectado en tu diario de errores.",
    content: `
      <p>El estoicismo es pragmatismo puro. No nos lamentamos por los errores pasados; los analizamos científicamente para diseñar <strong>acciones correctivas concretas</strong>.</p>
      <h3>El Plan de Mejora</h3>
      <p>Si tu error más común es entrar por FOMO antes del cierre de vela, tu regla correctiva debe ser: \"Sólo puedo abrir una posición si pongo una alarma al cierre de la vela actual y mis manos están fuera del ratón hasta entonces\".</p>
    `
  },
  day30: {
    id: "day30",
    pilar: 4,
    title: "Examen de Certificación Final",
    unlocked: false,
    completed: false,
    challenge: "Completa y aprueba el examen final del Módulo 4 con 100%. Genera y descarga tu Diploma de Maestría en Trading Profesional.",
    content: `
      <p>Has alcanzado el último día de este riguroso programa de transformación de 30 días. Has progresado desde desmitificar tus sesgos mentales hasta consolidar una rutina operativa inquebrantable de gestión de riesgo y lectura técnica limpia.</p>
      <div class="alert-box" style="border-left-color: gold; background: rgba(245, 158, 11, 0.03);">
        <strong>🏆 Examen de Certificación Final:</strong> Aprueba el examen técnico-práctico final de 5 preguntas para desbloquear la generación de tu Diploma de Maestría firmado por Albert Sierra.
      </div>
    `
  },
  day31: {
    id: "day31",
    pilar: 5,
    title: "Bloques de Órdenes e Intervención Algorítmica",
    unlocked: false,
    completed: false,
    challenge: "Identifica en tu gráfico del simulador una vela de fuerte intención que haya roto un nivel estructural (BOS) y marca el origen de esa vela como un Bloque de Órdenes (OB) institucional.",
    content: `
      <p>Comenzamos el <strong>Módulo 5: Bloques de Órdenes</strong>. En el trading institucional, entendemos que el mercado no es movido por traders minoristas, sino por algoritmos interbancarios que inyectan volumen masivo en zonas de precios específicas.</p>
      <h3>¿Qué es un Order Block (OB)?</h3>
      <p>Un Order Block es la última vela en sentido contrario antes de un movimiento fuerte e impulsivo que rompe la estructura del mercado (BOS). Esta vela representa la zona exacta donde las instituciones financieras acumularon un volumen masivo de órdenes de compra o venta en el pasado. Dado que las instituciones no pueden inyectar todas sus órdenes a la vez para no colapsar la cotización, dejan órdenes pendientes (límite). Cuando el precio regresa a esta zona (proceso de mitigación), estas órdenes se activan, provocando una reacción fuerte y predecible en el precio.</p>
      <ul>
        <li><strong>OB Alcista (Bullish Order Block):</strong> La última vela bajista antes del impulso alcista que rompe un máximo estructural.</li>
        <li><strong>OB Bajista (Bearish Order Block):</strong> La última vela alcista antes del impulso bajista que rompe un mínimo estructural.</li>
      </ul>
      <div class="highlight-box">
        <strong>💡 Clave Institucional:</strong> Un Order Block solo es válido si genera un BOS real en el precio y deja ineficiencias de volumen (Fair Value Gaps) en su expansión. Si no rompe estructura, es solo ruido del mercado.
      </div>
    `
  },
  day32: {
    id: "day32",
    pilar: 6,
    title: "Caza de Liquidez y la Ilusión de Soportes/Resistencias",
    unlocked: false,
    completed: false,
    challenge: "Encuentra una mecha larga que haya barrido un soporte o resistencia previa para luego darse la vuelta inmediatamente. Anota el precio del barrido de liquidez.",
    content: `
      <p>Comenzamos el <strong>Módulo 6: Liquidez del Mercado</strong>. Los traders minoristas ven los soportes y resistencias como barreras impenetrables donde el precio debe rebotar. Las instituciones los ven como **piscinas de liquidez masivas** (Liquidity Pools).</p>
      <h3>La Caza de Stops (Liquidity Sweeps)</h3>
      <p>Para abrir una posición de compra gigante, una institución necesita contrapartida: necesita que otros vendan en esa misma zona. ¿Dónde se concentran las órdenes de venta? Justo debajo de los soportes obvios (los Stop Loss de los compradores minoristas, que se ejecutan como órdenes de venta de mercado). El algoritmo interbancario empuja temporalmente el precio por debajo del soporte para activar estas órdenes de venta masivas, absorbiéndolas como órdenes de compra baratas para iniciar el movimiento alcista real.</p>
      <ul>
        <li><strong>BSL (Buy Stop Liquidity):</strong> Liquidez de compras por encima de máximos relativos (stops de vendedores).</li>
        <li><strong>SSL (Sell Stop Liquidity):</strong> Liquidez de ventas por debajo de mínimos relativos (stops de compradores).</li>
      </ul>
      <div class="highlight-box">
        <strong>👁️ Regla de Oro:</strong> Si no sabes dónde está la liquidez en el gráfico, tú eres la liquidez. Espera a que ocurra el barrido de liquidez (*sweep*) antes de buscar una entrada.
      </div>
    `
  },
  day33: {
    id: "day33",
    pilar: 7,
    title: "Desequilibrios Algorítmicos e Ineficiencias (FVG)",
    unlocked: false,
    completed: false,
    challenge: "Localiza un desequilibrio de 3 velas en el simulador donde la primera y la tercera vela no se solapen, dejando un vacío o Fair Value Gap (FVG). Anota el precio del rebalanceo.",
    content: `
      <p>Comenzamos el <strong>Módulo 7: Fair Value Gaps</strong>. Cuando el volumen institucional entra al mercado de forma agresiva, crea un desequilibrio de precios llamado **Fair Value Gap (FVG)** o ineficiencia de entrega.</p>
      <h3>Anatomía del FVG</h3>
      <p>Un FVG se compone de un patrón de 3 velas consecutivas. Ocurre cuando el movimiento de la segunda vela es tan rápido y agresivo que la mecha de la primera vela y la mecha de la tercera vela no logran solaparse, dejando un vacío de precios donde solo hubo participación de un lado del mercado (compras o ventas). El algoritmo interbancario tiende a regresar en el futuro a rebalancear esta ineficiencia para entregar el precio de manera eficiente.</p>
      <div class="highlight-box">
        <strong>📈 Confluencia Avanzada:</strong> La combinación de un Order Block con un Fair Value Gap justo en su expansión constituye uno de los setups de mayor probabilidad de acierto del trading institucional.
      </div>
    `
  },
  day34: {
    id: "day34",
    pilar: 8,
    title: "Fractalidad y Alineación Temporal (HTF/LTF)",
    unlocked: false,
    completed: false,
    challenge: "Describe por escrito cómo utilizarías un gráfico de 1 hora para determinar la dirección general y un gráfico de 1 o 5 minutos para afinar tu stop loss de entrada.",
    content: `
      <p>Comenzamos el <strong>Módulo 8: Fractalidad del Mercado</strong>. El mercado financiero es fractal: los mismos patrones estructurales se repiten desde gráficos semanales hasta gráficos de 1 minuto.</p>
      <h3>Alineación de Marcos Temporales</h3>
      <p>Un error mortal es operar setups en 1 minuto en dirección opuesta a la tendencia mayor. El trader profesional utiliza marcos temporales altos (HTF) para determinar la dirección y encontrar zonas de interés (POIs), y marcos temporales bajos (LTF) para esperar la confirmación de la entrada mediante quiebres locales de estructura (BOS) y mitigar el riesgo.</p>
      <ul>
        <li><strong>HTF (High Timeframe):</strong> Gráfico de 1 Hora o 4 Horas (Determina el sesgo direccional).</li>
        <li><strong>LTF (Low Timeframe):</strong> Gráfico de 1 Minuto o 5 Minutos (Determina el gatillo de entrada y sitúa el Stop Loss).</li>
      </ul>
    `
  },
  day35: {
    id: "day35",
    pilar: 9,
    title: "Zonas Premium y Descuento: Comprar Barato, Vender Caro",
    unlocked: false,
    completed: false,
    challenge: "Traza un rango operativo desde el inicio del impulso hasta el final del retroceso en tu simulador. Identifica si el precio actual cotiza por encima (Premium) o por debajo (Descuento) del 50%.",
    content: `
      <p>Comenzamos el <strong>Módulo 9: Rangos de Descuento</strong>. Los profesionales operan bajo las mismas reglas de un negocio comercial de inventarios: **comprar barato y vender caro**.</p>
      <h3>Premium vs Descuento</h3>
      <p>Utilizando el 50% de un rango operativo como frontera de equilibrio:</p>
      <ul>
        <li><strong>Zona Premium (Mitad Superior):</strong> Zona costosa. Solo buscamos ventas y descartamos compras de alto riesgo.</li>
        <li><strong>Zona de Descuento (Mitad Inferior):</strong> Zona barata. Solo buscamos compras en confluencia con OB y FVG institucionales.</li>
      </ul>
    `
  },
  day36: {
    id: "day36",
    pilar: 10,
    title: "El Poder de los Breaker Blocks (OB Roto)",
    unlocked: false,
    completed: false,
    challenge: "Describe la diferencia entre un Order Block normal y un Breaker Block (OB roto que cambia de función). Encuentra un ejemplo en tu simulador.",
    content: `
      <p>Comenzamos el <strong>Módulo 10: Mitigación & Breakers</strong>. ¿Qué ocurre cuando un bloque de órdenes falla y es roto con fuerza? Se transforma en una zona de alta probabilidad operativa llamada **Breaker Block**.</p>
      <h3>Mecánica del Breaker Block</h3>
      <p>El Breaker Block es un bloque de órdenes que fue sobrepasado por un movimiento impulsivo que barrió liquidez previa y luego rompió estructura. Al regresar el precio a este nivel, actúa con el principio de polaridad: un OB bajista roto se convierte en soporte de alta probabilidad para compras, permitiendo a las instituciones mitigar y cerrar en pérdidas nulas sus posiciones contrarias.</p>
    `
  },
  day37: {
    id: "day37",
    pilar: 11,
    title: "Subasta de Volumen: POC y Zonas de Alta Liquidez",
    unlocked: false,
    completed: false,
    challenge: "Identifica el Punto de Control de Volumen (POC) en una consolidación lateral y explica cómo usar las áreas de bajo volumen (LVN) para colocar tu Stop Loss técnico.",
    content: `
      <p>Comenzamos el <strong>Módulo 11: Perfil de Volumen</strong>. La acción del precio describe el movimiento; el perfil de volumen nos revela **dónde se negociaron realmente los contratos interbancarios**.</p>
      <h3>Zonas de Interés de Perfil</h3>
      <ul>
        <li><strong>POC (Point of Control):</strong> El precio exacto donde se negoció el mayor volumen de la sesión. Actúa como un imán para el precio.</li>
        <li><strong>VAL/VAH (Value Area High/Low):</strong> Los límites del área de valor que concentran el 70% de la actividad transaccional.</li>
      </ul>
    `
  },
  day38: {
    id: "day38",
    pilar: 12,
    title: "Reglas de Fondeo y Control de drawdown Institucional",
    unlocked: false,
    completed: false,
    challenge: "Diseña tu plan de Drawdown Máximo Diario específico para una cuenta financiada simulada de $50,000, respetando el límite del 2% diario.",
    content: `
      <p>Comenzamos el <strong>Módulo 12: Especulación de Fondos</strong>. Operar de forma institucional hoy en día implica trabajar con capital de terceros a través de empresas de fondeo (Prop Firms).</p>
      <h3>La Disciplina del Drawdown</h3>
      <p>Los traders institucionales no operan sin límites estrictos. En las cuentas fondeadas, la violación del límite de pérdida diario o el límite total (drawdown máximo) conlleva la cancelación inmediata de la cuenta. El autocontrol estoico es la única herramienta que te permite navegar estas reglas corporativas sin entrar en pánico.</p>
    `
  },
  day39: {
    id: "day39",
    pilar: 13,
    title: "Gestión Activa de Posición: Tomar Parciales y Riesgo Cero",
    unlocked: false,
    completed: false,
    challenge: "Simula una operación con 2 contratos en el simulador. Al alcanzar un R:R 1:1, cierra 1 contrato (toma de parcial) y mueve el Stop Loss del segundo contrato a Breakeven.",
    content: `
      <p>Comenzamos el <strong>Módulo 13: Drawdown & Cierres</strong>. El objetivo de un trader no es tener un 100% de acierto, sino **gestionar el riesgo de forma activa** para que la esperanza matemática haga su trabajo.</p>
      <h3>Tomas de Parciales y Breakeven</h3>
      <p>Los ricos no arriesgan su dinero tontamente. Cuando tu operación alcanza un R:R 1:1, cerrar el 50% de la posición (parcial) asegura ganancias en tu saldo y te permite colocar el Stop Loss de la posición restante a tu precio de entrada (Breakeven), eliminando el riesgo financiero del trade actual por completo.</p>
    `
  },
  day40: {
    id: "day40",
    pilar: 14,
    title: "El Checklist Institucional de Albert Sierra",
    unlocked: false,
    completed: false,
    challenge: "Redacta tu Checklist final de 5 confluencias institucionales antes de cada trade y aprueba la evaluación final de Maestría del Ecosistema.",
    content: `
      <p>Comenzamos el <strong>Módulo 14: Plan de Trading Final</strong>. Has culminado tu formación en la especulación de futuros interbancarios. En este último módulo unificamos todos los conocimientos en un Checklist operativo innegociable.</p>
      <h3>Tu Checklist de Confluencia</h3>
      <p>Antes de pulsar los botones de compra o venta en el simulador, debes marcar positivamente:</p>
      <ol>
        <li>¿El precio está mitigando una zona de interés HTF (OB / FVG)?</li>
        <li>¿Hubo un barrido de liquidez obvio antes del quiebre?</li>
        <li>¿Se generó un BOS en temporalidad menor (LTF)?</li>
        <li>¿Cotizamos en zona de Descuento (para largos) o Premium (para cortos)?</li>
        <li>¿El tamaño de la posición respeta estrictamente el 1% de riesgo?</li>
      </ol>
      <div class="alert-box" style="border-left-color: gold; background: rgba(245, 158, 11, 0.03);">
        <strong>🏆 Examen de Maestría Final del Ecosistema:</strong> Aprueba la evaluación técnica de abajo para certificar tu maestría definitiva y completar el Ecosistema AS.
      </div>
    `
  }
};

// Weekly Pillar Quizzes
const pilarQuizzes = {
  1: [
    {
      q: "¿Cuál es el enfoque estoico principal ante un resultado perdedor en una operación individual?",
      options: [
        "Aceptar que el mercado es probabilístico y el resultado de un trade individual no está bajo tu control.",
        "Buscar la revancha inmediata para recuperar la pérdida antes del cierre.",
        "Cambiar de estrategia porque el sistema ha fallado."
      ],
      answer: 0,
      explanation: "Aceptar que el resultado de un trade individual es incierto y fuera de tu control reduce el apego y la frustración emocional."
    },
    {
      q: "¿Qué es el sesgo de falsas expectativas en el trading de futuros?",
      options: [
        "Pensar que puedes obtener dinero fácil y rápido sin un control estricto de riesgo.",
        "Aceptar que el drawdown es una parte normal del negocio.",
        "Entender que la consistencia requiere tiempo y disciplina."
      ],
      answer: 0,
      explanation: "El sesgo de falsas expectativas nubla el juicio técnico y lleva al trader a asumir riesgos desproporcionados buscando enriquecimiento rápido."
    },
    {
      q: "¿Cómo se define un Short Squeeze en el mercado de futuros?",
      options: [
        "Un aumento acelerado de precio provocado por la liquidación forzosa de posiciones vendedoras.",
        "Una caída abrupta de precio debido a ventas institucionales.",
        "Una consolidación lateral del precio con bajo volumen."
      ],
      answer: 0,
      explanation: "El cierre forzado de posiciones cortas (que se ejecuta como órdenes de compra al mercado) provoca un aumento parabólico en el precio."
    },
    {
      q: "¿Qué es una trampa técnica o 'fakeout' en la lectura de precios?",
      options: [
        "Un rompimiento falso de soporte o resistencia diseñado para atrapar liquidez antes de un giro.",
        "Una orden de mercado que se ejecuta con deslizamiento.",
        "El cruce de una media móvil en un gráfico de velas."
      ],
      answer: 0,
      explanation: "Los fakeouts se producen cuando las instituciones empujan el precio más allá de un soporte/resistencia para activar stops minoristas y contrapartida."
    },
    {
      q: "¿Cuál es la única variable que un trader controla al 100% en el mercado de futuros?",
      options: [
        "El riesgo exacto que asume en cada operación antes de entrar.",
        "La dirección exacta que tomará el precio en la sesión.",
        "El balance neto de ganancias al final del mes."
      ],
      answer: 0,
      explanation: "Controlar el riesgo unitario (dónde sitúas tu stop loss y con qué volumen entras) es la única variable controlable bajo tu poder."
    }
  ],
  2: [
    {
      q: "Si arriesgas el 1% de una cuenta de $10,000, ¿cuál es tu pérdida máxima en dólares por operación?",
      options: ["$10.00 USD", "$100.00 USD", "$1,000.00 USD"],
      answer: 1,
      explanation: "El 1% de $10,000 es exactamente $100. Este es tu límite financiero por operación."
    },
    {
      q: "Con un ratio de Riesgo/Beneficio (R:R) de 1:2, ¿qué tasa de acierto necesitas para estar en equilibrio (sin pérdidas)?",
      options: ["50%", "34%", "20%"],
      answer: 1,
      explanation: "Al ganar el doble de lo que pierdes, con solo un 34% de acierto cubres tus pérdidas y comisiones operativas."
    },
    {
      q: "¿Qué indica la regla del Drawdown Máximo Diario?",
      options: [
        "El límite de pérdida en dólares tras el cual apagas la plataforma inmediatamente.",
        "El objetivo de ganancia diario para retirarte.",
        "El capital mínimo necesario para operar futuros MES."
      ],
      answer: 0,
      explanation: "El drawdown diario actúa de freno automático: una vez tocado, detienes la operativa para evitar dañar más tu capital."
    },
    {
      q: "¿Cuál es el propósito de registrar tus operaciones en la Bitácora de Trading?",
      options: [
        "Identificar patrones de comportamiento repetibles para construir consistencia.",
        "Mostrar tus resultados en redes sociales para ganar seguidores.",
        "Evitar pagar comisiones al broker."
      ],
      answer: 0,
      explanation: "La bitácora proporciona datos objetivos sobre tus decisiones pasadas para evaluar tu apego al plan y corregir desviaciones."
    },
    {
      q: "¿Cómo se calcula el tamaño de posición (contratos) óptimo?",
      options: [
        "Contratos = Riesgo ($) / (Distancia SL x Valor Punto del Contrato)",
        "Contratos = Capital x Apalancamiento",
        "Contratos = Capital / Margen de Garantía"
      ],
      answer: 0,
      explanation: "Esta fórmula vincula de manera científica la pérdida tolerada con la distancia del Stop Loss técnico en el activo operado."
    }
  ],
  3: [
    {
      q: "¿Por qué un trader institucional de futuros prefiere un gráfico limpio a uno lleno de indicadores rezagados?",
      options: [
        "Porque los indicadores secundarios causan parálisis por análisis y añaden ruido al precio puro.",
        "Porque los indicadores cuestan dinero en la plataforma de futuros.",
        "Porque el precio no tiene ninguna relación con las medias móviles."
      ],
      answer: 0,
      explanation: "El precio y la estructura de mercado son los únicos elementos líderes. Los osciladores y medias son sólo cálculos secundarios retrasados."
    },
    {
      q: "¿Qué es un BOS (Break of Structure) en una tendencia alcista?",
      options: [
        "El rompimiento al alza del último máximo de oscilación (HH) confirmando la tendencia.",
        "El quiebre a la baja del último mínimo ascendente (HL) sugiriendo un cambio de tendencia.",
        "Una vela japonesa de cuerpo muy grande con volumen bajo."
      ],
      answer: 1,
      explanation: "Romper el último HL implica el fin de la estructura de mínimos crecientes, sugiriendo que los vendedores toman el control."
    },
    {
      q: "Según la ley de polaridad, ¿qué sucede cuando se rompe una resistencia fuerte?",
      options: [
        "Tiende a actuar como soporte en testeos posteriores debido a la acumulación de órdenes.",
        "Pierde toda su relevancia y debe ser borrada del gráfico.",
        "El precio cae inmediatamente en una tendencia bajista."
      ],
      answer: 0,
      explanation: "Los vendedores rezagados cierran sus posiciones a breakeven, transformando el nivel roto en soporte ante el testeo del precio."
    },
    {
      q: "¿Cuál es la función principal de la EMA 200 en la lectura técnica?",
      options: [
        "Actuar como filtro direccional: solo largos sobre ella, solo cortos bajo ella.",
        "Dar la señal exacta de compra o venta en cada cruce.",
        "Determinar el tamaño de posición óptimo."
      ],
      answer: 0,
      explanation: "La EMA 200 sirve de brújula de tendencia: evita operar en contra del flujo dominante de capital institucional."
    },
    {
      q: "¿Cómo se utiliza el RSI de 14 períodos en una estrategia sin ruido?",
      options: [
        "Como medidor de momentum en el nivel central de 50 a favor de la tendencia.",
        "Para vender cuando toca 70 (sobrecompra) y comprar cuando toca 30 (sobreventa).",
        "Como indicador de la hora de apertura del mercado."
      ],
      answer: 0,
      explanation: "El nivel 50 determina el ecuador de la fuerza; cruzar sobre 50 en tendencia alcista es confirmación de momentum comprador."
    }
  ],
  4: [
    {
      q: "¿Qué comprende la rutina de pre-market de un trader profesional?",
      options: [
        "Preparar el gráfico, verificar noticias de alto impacto y validar la checklist antes de operar.",
        "Abrir varias operaciones en demo para ver el impulso.",
        "Revisar las redes sociales para ver qué recomiendan comprar."
      ],
      answer: 0,
      explanation: "La rutina asegura que estás alineado física y técnicamente antes del inicio de la sesión, evitando sorpresas informativas."
    },
    {
      q: "¿Cómo se clasifica un error en el diario operativo?",
      options: [
        "Como técnico (violación del setup) o emocional (violación del autocontrol).",
        "Como error del broker o error de la plataforma de gráficos.",
        "Como mala suerte o error por manipulación de mercado."
      ],
      answer: 0,
      explanation: "Dividirlos entre técnicos y emocionales te permite enfocar tu proceso correctivo de forma precisa sobre el conocimiento o el autocontrol."
    },
    {
      q: "¿Qué es la inactividad forzada en el protocolo de trading?",
      options: [
        "Retirarse inmediatamente tras tocar el límite de pérdida diaria para evitar la venganza.",
        "Esperar a que el mercado cierre para poder operar.",
        "Dejar de operar durante un año si tienes una pérdida."
      ],
      answer: 0,
      explanation: "La inactividad protege tu cuenta: te retiras al tocar tus límites para calmar la mente y preservar el capital restante."
    },
    {
      q: "¿Cuál es el objetivo de auditar de forma crítica tu diario de errores?",
      options: [
        "Identificar tus debilidades recurrentes y planificar acciones correctivas específicas.",
        "Saber cuánto dinero ganaste en comisiones.",
        "Justificar las pérdidas alegando manipulación de mercado."
      ],
      answer: 0,
      explanation: "La auditoría objetiva busca patrones débiles en tu operativa para mitigarlos con reglas escritas correctivas."
    },
    {
      q: "¿Cuál es la premisa fundamental del mercado de futuros para un operador estoico?",
      options: [
        "El mercado es un entorno de probabilidades, no de certezas.",
        "El mercado siempre sube a largo plazo.",
        "Se puede predecir el precio exacto con indicadores correctos."
      ],
      answer: 0,
      explanation: "El mercado opera bajo incertidumbre. Entenderlo como probabilidades erradica el dolor de perder y la necesidad de tener la razón."
    }
  ],
  5: [
    {
      q: "¿Qué valida la existencia de un Bloque de Órdenes (Order Block) institucional válido?",
      options: [
        "Que el precio haya roto estructura (BOS) y haya dejado ineficiencias (FVG) en su expansión.",
        "Que la vela sea de color verde y tenga un volumen muy bajo.",
        "Que coincida con la hora del cierre del mercado de Londres."
      ],
      answer: 0,
      explanation: "Un OB es válido únicamente si el algoritmo rompe estructura (BOS) y expande con fuerza, dejando ineficiencias de volumen."
    }
  ],
  6: [
    {
      q: "¿Cuál es el propósito algorítmico detrás de un barrido de liquidez (Liquidity Sweep)?",
      options: [
        "Activar los Stop Losses de operadores minoristas para absorber contrapartida institucional.",
        "Dar tiempo a los reguladores a revisar las transacciones del día.",
        "Reducir el apalancamiento general de la cuenta del simulador."
      ],
      answer: 0,
      explanation: "Las instituciones necesitan activar stops (órdenes contrarias a mercado) para contrapartida de sus órdenes masivas."
    }
  ],
  7: [
    {
      q: "¿Cómo se forma un Fair Value Gap (FVG) en un patrón de tres velas?",
      options: [
        "Cuando la mecha de la primera vela y la mecha de la tercera vela no logran solaparse, dejando una ineficiencia en la segunda vela.",
        "Cuando la segunda vela cruza por encima de la EMA 200.",
        "Cuando el volumen de la tercera vela es exactamente el doble de la primera."
      ],
      answer: 0,
      explanation: "Un FVG es un vacío de precios provocado por un flujo unilateral agresivo que impide el solapamiento de mechas adyacentes."
    }
  ],
  8: [
    {
      q: "¿Cuál es la regla fundamental para alinear marcos de tiempo (HTF y LTF)?",
      options: [
        "Definir la dirección y el sesgo en el gráfico mayor (HTF) y buscar el gatillo de entrada en el gráfico menor (LTF).",
        "Operar únicamente compras en LTF si el RSI en HTF está en sobreventa superior a 90.",
        "Ejecutar operaciones en sentido contrario a la estructura mayor si se rompe una media móvil."
      ],
      answer: 0,
      explanation: "Usar HTF para la brújula direccional y LTF para optimizar el Stop Loss técnico maximiza el ratio R:R."
    }
  ],
  9: [
    {
      q: "Si buscamos operaciones de compra institucionales (Largas), ¿en qué zona de precios debemos operar?",
      options: [
        "Por debajo de la línea del 50% del rango operativo (Zona de Descuento).",
        "Por encima de la línea del 50% del rango operativo (Zona Premium).",
        "Exactamente en el punto del POC de volumen máximo sin importar la tendencia."
      ],
      answer: 0,
      explanation: "Las compras deben buscarse en zona barata (Descuento) para maximizar la asimetría matemática."
    }
  ],
  10: [
    {
      q: "¿Qué define a un Breaker Block alcista?",
      options: [
        "Un bloque de órdenes bajista que fue roto con fuerza al alza tras barrer liquidez, y ahora actúa como soporte.",
        "Una vela que se cierra justo en el POC de la sesión anterior.",
        "Un gap que nunca fue rellenado en la apertura de Nueva York."
      ],
      answer: 0,
      explanation: "El Breaker es un OB fallido que se transforma en soporte debido a la mitigación de posiciones en breakeven por parte de instituciones."
    }
  ],
  11: [
    {
      q: "¿Qué representa el Punto de Control (POC) en un perfil de volumen?",
      options: [
        "El precio exacto donde se negoció el mayor volumen de la sesión.",
        "El precio máximo alcanzado durante la sesión asiática.",
        "El stop loss óptimo calculado por la plataforma."
      ],
      answer: 0,
      explanation: "El POC representa la zona de mayor aceptación del precio por parte de compradores y vendedores institucionales."
    }
  ],
  12: [
    {
      q: "¿Cuál es la medida estoica indispensable para no perder una cuenta de fondeo (Prop Firm)?",
      options: [
        "Detener la operativa y apagar la plataforma al tocar tu límite de drawdown diario programado.",
        "Aumentar el tamaño de contratos al perder para recuperar la cuenta rápido.",
        "Operar únicamente minutos antes del cierre del mercado para evitar comisiones."
      ],
      answer: 0,
      explanation: "Respetar el drawdown diario incondicionalmente es la única regla inquebrantable de consistencia."
    }
  ],
  13: [
    {
      q: "¿Cuál es la ventaja de tomar cierres parciales de posición al R:R 1:1?",
      options: [
        "Asegurar ganancias reales de capital y permitir colocar el riesgo de la posición restante a Breakeven.",
        "Evitar el pago de comisiones del broker.",
        "Garantizar que el 100% de los trades sean ganadores sin importar el Stop Loss."
      ],
      answer: 0,
      explanation: "Asegurar beneficios intermedios reduce el drawdown emocional y crea una operación libre de riesgo financiero."
    }
  ],
  14: [
    {
      q: "¿Qué regla estoica final resume el checklist de Albert Sierra antes de abrir una operación?",
      options: [
        "Cumplir el 100% de tus confluencias escritas y no abrir el trade si falta un solo elemento.",
        "Abrir la operación rápido por FOMO si el precio corre con fuerza en Nueva York.",
        "Apostar todo el balance sim de tu cuenta si confías mucho en la dirección."
      ],
      answer: 0,
      explanation: "La disciplina estoica consiste en ejecutar únicamente cuando tu checklist institucional se cumple al 100%."
    }
  ]
};

// Global App State
let activeSection = "welcome";
let activeDayId = "day1";
let activePilarAccordion = 1;
let activeQuizAnswers = {}; // { questionIndex: selectedOptionIndex }
let pilarPassedStates = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false };

// Load state from localStorage
const loadProgress = () => {
  const savedProgress = localStorage.getItem("vision_30day_progress");
  if (savedProgress) {
    try {
      const parsed = JSON.parse(savedProgress);
      Object.keys(parsed.days).forEach(key => {
        if (courseData[key]) {
          courseData[key].completed = parsed.days[key].completed;
          courseData[key].unlocked = parsed.days[key].unlocked;
        }
      });
      pilarPassedStates = parsed.quizzes;
    } catch (e) {
      console.error("Error parsing progress", e);
    }
  }
  updateUIProgress();
};

// Save state to localStorage
const saveProgress = () => {
  const daysState = {};
  Object.keys(courseData).forEach(key => {
    daysState[key] = {
      completed: courseData[key].completed,
      unlocked: courseData[key].unlocked
    };
  });
  const stateToSave = {
    days: daysState,
    quizzes: pilarPassedStates
  };
  localStorage.setItem("vision_30day_progress", JSON.stringify(stateToSave));
};

// Update progress bar and unlock states
const updateUIProgress = () => {
  let completedCount = 0;
  const totalDays = 40;

  Object.values(courseData).forEach(day => {
    if (day.completed) completedCount++;
  });

  const percentage = Math.round((completedCount / totalDays) * 100);
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");
  
  if (progressText) progressText.textContent = `${percentage}%`;
  if (progressBar) progressBar.style.width = `${percentage}%`;

  // Toggle Certificate tab in sidebar if course is completed
  const certMenuItem = document.getElementById("menu-item-certificate");
  if (certMenuItem) {
    const allPassed = Object.values(pilarPassedStates).every(val => val === true);
    certMenuItem.style.display = allPassed ? "block" : "none";
  }

  lucide.createIcons();
};

// Reset academy progress
window.resetAcademyProgress = () => {
  if (confirm("¿Estás seguro de que deseas reiniciar todo tu progreso del curso de 30 días y tu bitácora?")) {
    localStorage.removeItem("vision_30day_progress");
    localStorage.removeItem("vision_simulator_balance");
    Object.keys(courseData).forEach((key, index) => {
      courseData[key].completed = false;
      courseData[key].unlocked = index === 0;
      localStorage.removeItem(`vision_challenge_${key}`);
    });
    pilarPassedStates = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false };
    saveProgress();
    updateUIProgress();
    renderAcademicMenu();
    showSection("welcome");
  }
};

// Unlock all lessons and quizzes
window.unlockAllLessons = () => {
  if (confirm("¿Deseas desbloquear todas las lecciones del curso de 30 días y evaluaciones para navegar libremente?")) {
    Object.keys(courseData).forEach(key => {
      courseData[key].unlocked = true;
    });
    pilarPassedStates = { 1: true, 2: true, 3: true, 4: true };
    saveProgress();
    updateUIProgress();
    renderAcademicMenu();
    alert("¡Todas las lecciones y evaluaciones han sido desbloqueadas con éxito!");
  }
};

// Sidebar navigation click routing
const showSection = (sectionId) => {
  document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));

  const targetSec = document.getElementById(sectionId);
  if (targetSec) {
    targetSec.classList.add("active");
  }

  const targetMenuItem = document.querySelector(`[data-target="${sectionId}"]`);
  if (targetMenuItem) {
    targetMenuItem.classList.add("active");
  }

  activeSection = sectionId;
  stopAllSpeech();

  if (sectionId === "glossary") {
    renderGlossary();
  } else if (sectionId === "certificate") {
    renderCertificate();
  }
};

// Open Specific Pilar from Welcome Screen
window.openPillar = (pilarId) => {
  // Find first unlocked day of this pilar
  const pilarDays = Object.values(courseData).filter(d => d.pilar === pilarId);
  const unlockedDays = pilarDays.filter(d => d.unlocked);
  
  if (unlockedDays.length > 0) {
    // Open the latest unlocked day of this pilar
    const targetDay = unlockedDays[unlockedDays.length - 1];
    window.loadDay(targetDay.id);
  } else {
    alert("Este pilar se encuentra bloqueado. Debes completar las lecciones y evaluaciones de la semana anterior.");
  }
};

// Render Collapsible sidebar week list
const renderAcademicMenu = () => {
  const container = document.getElementById("academic-menu-container");
  if (!container) return;

  let html = "";
  
  const pilares = [
    { id: 1, name: "Pilar 1: Mentalidad Ganadora", icon: "brain" },
    { id: 2, name: "Pilar 2: Gestión y Disciplina", icon: "shield-check" },
    { id: 3, name: "Pilar 3: Estrategia de Valor", icon: "trending-up" },
    { id: 4, name: "Pilar 4: Ejecución y Auditoría", icon: "activity" },
    { id: 5, name: "Pilar 5: Bloques de Órdenes", icon: "box" },
    { id: 6, name: "Pilar 6: Liquidez del Mercado", icon: "target" },
    { id: 7, name: "Pilar 7: Fair Value Gaps", icon: "split" },
    { id: 8, name: "Pilar 8: Fractalidad HTF/LTF", icon: "layers" },
    { id: 9, name: "Pilar 9: Rangos de Descuento", icon: "percent" },
    { id: 10, name: "Pilar 10: Mitigación & Breakers", icon: "repeat" },
    { id: 11, name: "Pilar 11: Perfil de Volumen", icon: "bar-chart-2" },
    { id: 12, name: "Pilar 12: Especulación de Fondos", icon: "award" },
    { id: 13, name: "Pilar 13: Drawdown & Cierres", icon: "shield" },
    { id: 14, name: "Pilar 14: Plan de Trading Final", icon: "check-square" }
  ];

  pilares.forEach(pilar => {
    const pilarDays = Object.values(courseData).filter(d => d.pilar === pilar.id);
    const isOpen = activePilarAccordion === pilar.id;
    
    html += `
      <div class="pilar-group ${isOpen ? 'open' : ''}" id="pilar-group-${pilar.id}">
        <div class="pilar-header" onclick="window.togglePilarAccordion(${pilar.id})">
          <span style="display:flex; align-items:center; gap:8px;">
            <i data-lucide="${pilar.icon}" style="width:14px; height:14px; color: ${isOpen ? 'var(--color-accent)' : 'var(--text-secondary)'}"></i>
            ${pilar.name}
          </span>
          <i data-lucide="${isOpen ? 'chevron-down' : 'chevron-right'}" style="width: 14px; height: 14px; color: var(--text-muted);"></i>
        </div>
        <div class="pilar-sub-list">
    `;
    
    pilarDays.forEach(day => {
      const isActive = activeSection === "academy-day" && activeDayId === day.id;
      const isLocked = !day.unlocked;
      
      let statusIcon = '<i data-lucide="lock" class="status-locked" style="width:12px; height:12px;"></i>';
      if (day.completed) {
        statusIcon = '<i data-lucide="check-circle" class="status-completed" style="width:12px; height:12px; color:var(--color-bull);"></i>';
      } else if (day.unlocked) {
        statusIcon = '<i data-lucide="circle" class="status-unlocked" style="width:12px; height:12px; color:var(--color-accent);"></i>';
      }

      html += `
        <div class="day-item ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}" onclick="window.loadDay('${day.id}')">
          <span>Día ${day.id.replace("day", "")}: ${day.title}</span>
          <span class="menu-status">${statusIcon}</span>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
};

window.togglePilarAccordion = (pilarId) => {
  activePilarAccordion = activePilarAccordion === pilarId ? null : pilarId;
  renderAcademicMenu();
};

// Dynamic support chart generator for the 40 days of the course (TradingView-like style)
const getGraphicForDay = (dayNum) => {
  const width = 500;
  const height = 220;
  let elementsHtml = "";
  let title = "";

  const grid = () => `
    <rect width="${width}" height="${height}" fill="#080a0f" rx="8" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
    
    <!-- Grid Lines (Horizontal) -->
    <line x1="10" y1="60" x2="440" y2="60" stroke="rgba(255,255,255,0.03)" stroke-width="0.75" />
    <line x1="10" y1="100" x2="440" y2="100" stroke="rgba(255,255,255,0.03)" stroke-width="0.75" />
    <line x1="10" y1="140" x2="440" y2="140" stroke="rgba(255,255,255,0.03)" stroke-width="0.75" />
    <line x1="10" y1="180" x2="440" y2="180" stroke="rgba(255,255,255,0.06)" stroke-width="1" />

    <!-- Grid Lines (Vertical) -->
    <line x1="60" y1="25" x2="60" y2="180" stroke="rgba(255,255,255,0.02)" stroke-width="0.75" />
    <line x1="140" y1="25" x2="140" y2="180" stroke="rgba(255,255,255,0.02)" stroke-width="0.75" />
    <line x1="220" y1="25" x2="220" y2="180" stroke="rgba(255,255,255,0.02)" stroke-width="0.75" />
    <line x1="300" y1="25" x2="300" y2="180" stroke="rgba(255,255,255,0.02)" stroke-width="0.75" />
    <line x1="380" y1="25" x2="380" y2="180" stroke="rgba(255,255,255,0.02)" stroke-width="0.75" />
    <line x1="440" y1="25" x2="440" y2="180" stroke="rgba(255,255,255,0.06)" stroke-width="1" />

    <!-- Y-Axis (Price Scale) -->
    <text x="448" y="63" fill="var(--text-muted)" font-size="7.5" font-family="monospace">4530.00</text>
    <text x="448" y="103" fill="var(--text-muted)" font-size="7.5" font-family="monospace">4518.50</text>
    <text x="448" y="143" fill="var(--text-muted)" font-size="7.5" font-family="monospace">4312.00</text>
    <text x="448" y="178" fill="var(--text-muted)" font-size="7.5" font-family="monospace">4305.50</text>

    <!-- X-Axis (Time Scale) -->
    <text x="60" y="197" fill="var(--text-muted)" font-size="7.5" font-family="monospace" text-anchor="middle">09:30</text>
    <text x="140" y="197" fill="var(--text-muted)" font-size="7.5" font-family="monospace" text-anchor="middle">10:00</text>
    <text x="220" y="197" fill="var(--text-muted)" font-size="7.5" font-family="monospace" text-anchor="middle">10:30</text>
    <text x="300" y="197" fill="var(--text-muted)" font-size="7.5" font-family="monospace" text-anchor="middle">11:00</text>
    <text x="380" y="197" fill="var(--text-muted)" font-size="7.5" font-family="monospace" text-anchor="middle">11:30</text>
  `;

  const header = (ticker = "ES1! (S&P 500 Futures)") => `
    <!-- TradingView Ticker Widget Info Header -->
    <text x="12" y="17" fill="#00d2ff" font-size="8.5" font-family="var(--font-sans), sans-serif" font-weight="bold">${ticker}</text>
    <text x="115" y="17" fill="var(--text-secondary)" font-size="7.5" font-family="var(--font-sans), sans-serif">5m • CME Group</text>
    <text x="185" y="17" fill="var(--text-muted)" font-size="7.5" font-family="monospace">O:4312.50 H:4319.75 L:4311.00 C:4315.25</text>
  `;

  const candle = (x, open, close, high, low, color) => {
    const isBull = color === 'bull' || (color === undefined && close < open);
    const fill = isBull ? '#10b981' : '#ef4444';
    const top = Math.min(open, close);
    const h = Math.abs(open - close) || 2;
    return `
      <line x1="${x}" y1="${high}" x2="${x}" y2="${low}" stroke="${fill}" stroke-width="1.5" />
      <rect x="${x - 6}" y="${top}" width="12" height="${h}" fill="${fill}" rx="1.5" stroke="${fill}" stroke-width="0.5" />
    `;
  };

  const volume = (x, hVal, isUp) => `
    <!-- Translucent Volume Bars at Bottom -->
    <rect x="${x - 5}" y="${180 - hVal}" width="10" height="${hVal}" fill="${isUp ? 'rgba(16, 185, 129, 0.14)' : 'rgba(239, 68, 68, 0.14)'}" stroke="${isUp ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.25)'}" stroke-width="0.5" />
  `;

  const trendLine = (pts, color = '#3b82f6', w = 2.5) => {
    let d = "";
    pts.forEach((p, idx) => {
      d += (idx === 0 ? "M " : "L ") + `${p[0]},${p[1]}`;
    });
    return `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" />`;
  };

  const text = (x, y, str, size = 11, color = '#9ca3af', anchor = 'start', weight = 'normal') => `
    <text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-family="var(--font-sans), sans-serif" font-weight="${weight}" text-anchor="${anchor}">${str}</text>
  `;

  const circle = (x, y, r, fill = '#3b82f6') => `
    <circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" />
  `;

  const arrow = (x1, y1, x2, y2, color = '#f59e0b') => `
    <defs>
      <marker id="arr-${dayNum}" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="${color}" />
      </marker>
    </defs>
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="1.5" marker-end="url(#arr-${dayNum})" />
  `;

  const zone = (x, y, w, h, fill = 'rgba(16, 185, 129, 0.08)', stroke = 'rgba(16, 185, 129, 0.2)') => `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-dasharray="3,3" />
  `;

  const line = (x1, y1, x2, y2, color = '#242f3d', w = 1, dash = '') => `
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" ${dash ? `stroke-dasharray="${dash}"` : ''} />
  `;

  elementsHtml += grid();

  // Render TV Ticker header dynamically unless it's a diploma or dashboard layout
  if (![3, 7, 11, 12, 13, 15, 22, 23, 24, 26, 27, 28, 29, 30, 38, 40].includes(dayNum)) {
    elementsHtml += header();
  }

  switch (dayNum) {
    case 1:
      title = "El Precio Objetivamente";
      elementsHtml += volume(80, 15, true);
      elementsHtml += volume(140, 8, false);
      elementsHtml += volume(200, 25, true);
      elementsHtml += volume(260, 12, false);
      elementsHtml += volume(320, 30, true);
      elementsHtml += volume(380, 35, true);
      elementsHtml += candle(80, 150, 130, 120, 160);
      elementsHtml += candle(140, 135, 145, 125, 155);
      elementsHtml += candle(200, 140, 110, 100, 150);
      elementsHtml += candle(260, 115, 125, 110, 135);
      elementsHtml += candle(320, 120, 80, 70, 130);
      elementsHtml += candle(380, 85, 55, 45, 95);
      elementsHtml += trendLine([[80,140], [140,140], [200,125], [260,120], [320,100], [380,70]], '#3b82f6');
      elementsHtml += circle(380, 70, 5, '#3b82f6');
      elementsHtml += text(370, 40, "La Única Realidad", 10, '#f3f4f6', 'end', 'bold');
      break;
    case 2:
      title = "Pánico y FOMO en el Gráfico";
      elementsHtml += trendLine([[40, 140], [100, 150], [180, 60], [220, 45], [300, 160], [380, 175], [440, 100]], 'rgba(255,255,255,0.15)');
      elementsHtml += circle(220, 45, 6, '#ef4444');
      elementsHtml += text(220, 35, "FOMO (Comprar el Techo)", 10, '#ef4444', 'middle', 'bold');
      elementsHtml += circle(380, 175, 6, '#ef4444');
      elementsHtml += text(380, 195, "PÁNICO (Vender el Suelo)", 10, '#ef4444', 'middle', 'bold');
      break;
    case 3:
      title = "Distribución Aleatoria de Resultados";
      const tData = ['W', 'L', 'L', 'W', 'W', 'L', 'W', 'L', 'W', 'W'];
      tData.forEach((t, i) => {
        const x = 50 + i * 40;
        const color = t === 'W' ? '#10b981' : '#ef4444';
        elementsHtml += `
          <rect x="${x}" y="85" width="28" height="28" fill="${color}15" stroke="${color}" stroke-width="2" rx="4" />
          <text x="${x + 14}" y="103" fill="${color}" font-size="11" font-family="monospace" text-anchor="middle" font-weight="bold">${t}</text>
        `;
      });
      elementsHtml += text(250, 150, "60% Acierto en Muestra de 10 Operaciones", 11, '#f3f4f6', 'middle');
      elementsHtml += text(250, 170, "Cualquier trade individual es aleatorio", 10, '#9ca3af', 'middle');
      break;
    case 4:
      title = "SSL Sweep (Caza de Stops)";
      elementsHtml += volume(100, 10, true);
      elementsHtml += volume(160, 18, false);
      elementsHtml += volume(200, 8, true);
      elementsHtml += volume(250, 15, false);
      elementsHtml += volume(280, 35, true);
      elementsHtml += line(40, 130, 460, 130, 'rgba(239, 68, 68, 0.4)', 1.5, '3,3');
      elementsHtml += text(50, 122, "Soporte Obvio Minorista", 10, '#9ca3af');
      elementsHtml += trendLine([[40, 90], [100, 100], [160, 130], [200, 100], [260, 130], [280, 155], [320, 70], [380, 50]], '#3b82f6');
      elementsHtml += circle(280, 155, 5, '#10b981');
      elementsHtml += arrow(280, 185, 280, 162, '#10b981');
      elementsHtml += text(280, 198, "Liquidez Absorbida", 10, '#10b981', 'middle', 'bold');
      break;
    case 5:
      title = "Cascada de Compras Forzadas (Squeeze)";
      elementsHtml += volume(80, 12, true);
      elementsHtml += volume(140, 10, false);
      elementsHtml += volume(200, 6, true);
      elementsHtml += volume(260, 42, true);
      elementsHtml += line(40, 100, 460, 100, 'rgba(239, 68, 68, 0.4)', 1.5, '3,3');
      elementsHtml += text(50, 90, "Resistencia Minorista (Buy Stops)", 10, '#9ca3af');
      elementsHtml += candle(80, 120, 130, 115, 140);
      elementsHtml += candle(140, 125, 110, 105, 130);
      elementsHtml += candle(200, 110, 115, 105, 125);
      elementsHtml += candle(260, 105, 40, 30, 110, 'bull');
      elementsHtml += arrow(260, 95, 260, 45, '#10b981');
      elementsHtml += text(275, 60, "SHORT SQUEEZE", 11, '#10b981', 'start', 'bold');
      break;
    case 6:
      title = "Rechazo de Falso Rompimiento (Fakeout)";
      elementsHtml += volume(120, 15, true);
      elementsHtml += volume(180, 22, true);
      elementsHtml += volume(240, 35, false);
      elementsHtml += volume(300, 28, false);
      elementsHtml += volume(360, 20, false);
      elementsHtml += line(40, 90, 460, 90, 'rgba(255, 255, 255, 0.15)', 1.5, '3,3');
      elementsHtml += text(50, 80, "Línea de Resistencia", 10, '#9ca3af');
      elementsHtml += candle(120, 130, 110, 100, 140);
      elementsHtml += candle(180, 110, 95, 90, 120);
      elementsHtml += candle(240, 95, 105, 60, 110, 'bear'); // long wick high
      elementsHtml += text(240, 50, "Caza y Cierre Interior", 10, '#ef4444', 'middle', 'bold');
      elementsHtml += candle(300, 105, 135, 100, 140, 'bear');
      elementsHtml += candle(360, 135, 160, 130, 170, 'bear');
      break;
    case 7:
      title = "El Escudo Mental Estoico";
      elementsHtml += trendLine([[40,110],[100,130],[160,90],[220,140]], 'rgba(239, 68, 68, 0.25)', 2);
      elementsHtml += `
        <path d="M 280,60 C 310,60 330,70 330,100 C 330,140 280,170 280,170 C 280,170 230,140 230,100 C 230,70 250,60 280,60 Z" fill="#3b82f615" stroke="#3b82f6" stroke-width="3" />
        <path d="M 280,75 L 280,150 M 255,100 L 305,100" stroke="#3b82f6" stroke-width="2" />
      `;
      elementsHtml += text(280, 45, "DISCIPLINA INQUEBRANTABLE", 11, '#3b82f6', 'middle', 'bold');
      elementsHtml += text(110, 160, "Fluctuaciones del Mercado", 10, '#ef4444', 'middle');
      elementsHtml += arrow(160, 130, 220, 115, '#ef4444');
      break;
    case 8:
      title = "Preservación del Capital de Trabajo";
      elementsHtml += trendLine([[50, 100], [90, 101], [130, 99], [170, 102], [210, 100], [250, 103], [290, 101], [330, 104], [370, 102], [410, 105]], '#10b981', 2);
      elementsHtml += trendLine([[50, 100], [90, 115], [130, 130], [170, 142], [210, 160], [250, 178], [290, 195], [330, 210]], '#ef4444', 2.5);
      elementsHtml += text(420, 105, "Riesgo 1% (Seguro)", 10, '#10b981');
      elementsHtml += text(340, 205, "Riesgo 10% (Ruina)", 10, '#ef4444');
      break;
    case 9:
      title = "Relación Riesgo Beneficio (R:R)";
      elementsHtml += line(60, 110, 440, 110, '#3b82f6', 2);
      elementsHtml += text(70, 100, "Precio de Entrada", 10, '#3b82f6');
      elementsHtml += zone(120, 110, 260, 40, 'rgba(239, 68, 68, 0.08)', 'rgba(239, 68, 68, 0.25)');
      elementsHtml += text(250, 135, "Riesgo: 1% ($100) - Stop Loss", 10, '#ef4444', 'middle');
      elementsHtml += zone(120, 30, 260, 80, 'rgba(16, 185, 129, 0.08)', 'rgba(16, 185, 129, 0.25)');
      elementsHtml += text(250, 75, "Beneficio: 2% ($200) - Take Profit", 10, '#10b981', 'middle');
      break;
    case 10:
      title = "Daily Drawdown Cut-off";
      elementsHtml += trendLine([[40, 80], [120, 70], [200, 110], [280, 150]], '#ef4444', 2.5);
      elementsHtml += line(40, 140, 460, 140, '#f59e0b', 2, '4,4');
      elementsHtml += text(350, 130, "Límite Diario Tocado", 10, '#f59e0b');
      elementsHtml += circle(280, 150, 6, '#ef4444');
      elementsHtml += text(295, 175, "DESCONEXIÓN OBLIGATORIA", 11, '#ef4444', 'start', 'bold');
      break;
    case 11:
      title = "El Diario de Operaciones del Profesional";
      elementsHtml += `
        <rect x="60" y="40" width="380" height="140" fill="#131a22" stroke="var(--border-color)" rx="6"/>
        <rect x="60" y="40" width="380" height="30" fill="#1b222c" rx="6"/>
        <line x1="60" y1="70" x2="440" y2="70" stroke="var(--border-color)"/>
      `;
      elementsHtml += text(70, 60, "FECHA", 9, '#9ca3af', 'start', 'bold');
      elementsHtml += text(160, 60, "ACTIVO", 9, '#9ca3af', 'start', 'bold');
      elementsHtml += text(250, 60, "RIESGO", 9, '#9ca3af', 'start', 'bold');
      elementsHtml += text(340, 60, "P&L NETO", 9, '#9ca3af', 'start', 'bold');
      
      elementsHtml += text(70, 100, "Hoy", 9, '#9ca3af');
      elementsHtml += text(160, 100, "ES Futures", 9, '#f3f4f6');
      elementsHtml += text(250, 100, "1% ($100)", 9, '#3b82f6');
      elementsHtml += text(340, 100, "+$200.00", 9, '#10b981', 'start', 'bold');
      elementsHtml += line(60, 120, 440, 120, 'rgba(255,255,255,0.03)');
      
      elementsHtml += text(70, 150, "Ayer", 9, '#9ca3af');
      elementsHtml += text(160, 150, "NQ Futures", 9, '#f3f4f6');
      elementsHtml += text(250, 150, "1% ($100)", 9, '#3b82f6');
      elementsHtml += text(340, 150, "-$100.00", 9, '#ef4444', 'start', 'bold');
      break;
    case 12:
      title = "Proceso Operativo Real";
      elementsHtml += `
        <rect x="80" y="40" width="340" height="140" fill="#131a22" stroke="var(--border-color)" rx="8" />
      `;
      elementsHtml += text(250, 65, "P&L Bruto en Pantalla: +$250", 11, '#f3f4f6', 'middle');
      elementsHtml += text(250, 95, "Deslizamiento (Slippage): -$20", 11, '#f59e0b', 'middle');
      elementsHtml += text(250, 125, "Comisión Operativa: -$5", 11, '#ef4444', 'middle');
      elementsHtml += line(100, 140, 400, 140, 'var(--border-color)');
      elementsHtml += text(250, 165, "Resultado Neto en Cuenta: +$225", 12, '#10b981', 'middle', 'bold');
      break;
    case 13:
      title = "El Método Repetible de la Esperanza";
      elementsHtml += `
        <rect x="40" y="90" width="80" height="40" fill="#1b222c" stroke="rgba(255,255,255,0.05)" rx="4"/>
        <text x="80" y="114" fill="#f3f4f6" font-size="10" text-anchor="middle">Reglas Claras</text>
      `;
      elementsHtml += arrow(120, 110, 150, 110, '#3b82f6');
      elementsHtml += `
        <rect x="150" y="90" width="90" height="40" fill="#3b82f615" stroke="rgba(255,255,255,0.05)" rx="4"/>
        <text x="195" y="114" fill="#f3f4f6" font-size="10" text-anchor="middle">Igual Ejecución</text>
      `;
      elementsHtml += arrow(240, 110, 270, 110, '#3b82f6');
      elementsHtml += `
        <rect x="270" y="90" width="80" height="40" fill="#1b222c" stroke="rgba(255,255,255,0.05)" rx="4"/>
        <text x="310" y="114" fill="#f3f4f6" font-size="10" text-anchor="middle">Muestra 100</text>
      `;
      elementsHtml += arrow(350, 110, 380, 110, '#10b981');
      elementsHtml += `
        <rect x="380" y="90" width="80" height="40" fill="#10b98115" stroke="rgba(255,255,255,0.05)" rx="4"/>
        <text x="420" y="114" fill="#f3f4f6" font-size="10" text-anchor="middle">Rentabilidad</text>
      `;
      break;
    case 14:
      title = "Ajuste de Lotes según Distancia de Stop Loss";
      elementsHtml += zone(60, 50, 150, 65, 'rgba(239, 68, 68, 0.05)', '#ef4444');
      elementsHtml += text(135, 75, "SL Ajustado (10 pts)", 10, '#f3f4f6', 'middle');
      elementsHtml += text(135, 95, "2 Contratos MES", 10, '#10b981', 'middle', 'bold');
      elementsHtml += text(135, 130, "Riesgo Fijo: $100 (1%)", 9, '#9ca3af', 'middle');
      
      elementsHtml += zone(290, 50, 150, 65, 'rgba(239, 68, 68, 0.05)', '#ef4444');
      elementsHtml += text(365, 75, "SL Amplio (20 pts)", 10, '#f3f4f6', 'middle');
      elementsHtml += text(365, 95, "1 Contrato MES", 10, '#10b981', 'middle', 'bold');
      elementsHtml += text(365, 130, "Riesgo Fijo: $100 (1%)", 9, '#9ca3af', 'middle');
      
      elementsHtml += arrow(220, 85, 280, 85, '#f59e0b');
      elementsHtml += text(250, 105, "SL x2", 9, '#f59e0b', 'middle');
      elementsHtml += text(250, 117, "Lotes /2", 9, '#f59e0b', 'middle');
      break;
    case 15:
      title = "Ancla Metodológica Contra el Ruido";
      elementsHtml += `
        <path d="M 250,50 L 250,150 M 220,70 L 280,70 M 210,130 C 210,170 290,170 290,130 M 190,120 L 210,130 M 310,120 L 290,130" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" fill="none" />
        <circle cx="250" cy="50" r="10" stroke="#f59e0b" stroke-width="3" fill="none" />
      `;
      elementsHtml += text(250, 30, "PRESERVACIÓN INDISPENSABLE", 11, '#f59e0b', 'middle', 'bold');
      elementsHtml += text(100, 110, "Riesgos del Mercado", 10, '#ef4444', 'middle');
      elementsHtml += arrow(160, 110, 200, 130, '#ef4444');
      break;
    case 16:
      title = "Tendencia Saludable (Estructura)";
      elementsHtml += volume(100, 18, true);
      elementsHtml += volume(140, 8, false);
      elementsHtml += volume(210, 25, true);
      elementsHtml += volume(250, 12, false);
      elementsHtml += volume(330, 30, true);
      elementsHtml += volume(370, 10, false);
      elementsHtml += trendLine([[40, 170], [100, 110], [140, 130], [210, 70], [250, 95], [330, 40], [370, 60], [440, 15]], 'rgba(255,255,255,0.15)', 1.5);
      elementsHtml += circle(100, 110, 4, '#3b82f6'); elementsHtml += text(100, 95, "HH", 10, '#3b82f6', 'middle', 'bold');
      elementsHtml += circle(210, 70, 4, '#3b82f6'); elementsHtml += text(210, 55, "HH", 10, '#3b82f6', 'middle', 'bold');
      elementsHtml += circle(330, 40, 4, '#3b82f6'); elementsHtml += text(330, 25, "HH", 10, '#3b82f6', 'middle', 'bold');
      elementsHtml += circle(140, 130, 4, '#10b981'); elementsHtml += text(140, 145, "HL", 10, '#10b981', 'middle', 'bold');
      elementsHtml += circle(250, 95, 4, '#10b981'); elementsHtml += text(250, 110, "HL", 10, '#10b981', 'middle', 'bold');
      elementsHtml += circle(370, 60, 4, '#10b981'); elementsHtml += text(370, 75, "HL", 10, '#10b981', 'middle', 'bold');
      break;
    case 17:
      title = "Quiebre Estructural Defensivo";
      elementsHtml += volume(110, 22, true);
      elementsHtml += volume(160, 14, false);
      elementsHtml += volume(230, 28, true);
      elementsHtml += volume(290, 38, false);
      elementsHtml += volume(330, 42, false);
      elementsHtml += trendLine([[50, 130], [110, 80], [160, 110], [230, 50], [290, 120], [330, 140], [390, 160]], 'rgba(255,255,255,0.15)', 1.5);
      elementsHtml += circle(290, 120, 5, '#ef4444');
      elementsHtml += line(260, 120, 360, 120, '#ef4444', 1.5, '3,3');
      elementsHtml += text(335, 110, "BOS Bajista", 10, '#ef4444', 'middle', 'bold');
      elementsHtml += circle(310, 120, 4, '#ef4444');
      elementsHtml += arrow(330, 120, 350, 140, '#ef4444');
      break;
    case 18:
      title = "Zonas Clave de Oferta y Demanda";
      elementsHtml += zone(60, 30, 380, 35, 'rgba(239, 68, 68, 0.08)', 'rgba(239, 68, 68, 0.25)');
      elementsHtml += text(250, 52, "ZONA DE OFERTA (Institucional)", 11, '#ef4444', 'middle', 'bold');
      elementsHtml += zone(60, 150, 380, 35, 'rgba(16, 185, 129, 0.08)', 'rgba(16, 185, 129, 0.25)');
      elementsHtml += text(250, 172, "ZONA DE DEMANDA (Institucional)", 11, '#10b981', 'middle', 'bold');
      elementsHtml += trendLine([[80,155], [160,55], [240,155], [320,55], [400,155]], '#3b82f6', 2);
      break;
    case 19:
      title = "Lectura Limpia de Estructura";
      elementsHtml += trendLine([[60, 150], [120, 60], [180, 110], [240, 60], [300, 160], [350, 150], [420, 200]], '#3b82f6', 2.5);
      elementsHtml += circle(120, 60, 6, '#ef4444');
      elementsHtml += circle(240, 60, 6, '#ef4444');
      elementsHtml += text(180, 45, "Patrón de Reversión", 11, '#ef4444', 'middle', 'bold');
      elementsHtml += line(140, 110, 350, 110, '#f59e0b', 1.5, '2,2');
      elementsHtml += text(360, 114, "Línea de Cuello", 9, '#f59e0b');
      break;
    case 20:
      title = "Principio de Polaridad";
      elementsHtml += line(40, 110, 460, 110, '#f59e0b', 2);
      elementsHtml += text(50, 100, "Resistencia Antigua", 10, '#f59e0b');
      elementsHtml += text(450, 125, "Soporte Nuevo", 10, '#f59e0b', 'end');
      elementsHtml += trendLine([[60, 160], [130, 130], [200, 140], [270, 80], [330, 110], [410, 50]], '#3b82f6', 2.5);
      elementsHtml += circle(330, 110, 5, '#10b981');
      elementsHtml += arrow(330, 140, 330, 115, '#10b981');
      elementsHtml += text(330, 155, "Testeo (Compra)", 10, '#10b981', 'middle', 'bold');
      break;
    case 21:
      title = "EMA 200 y Momentum RSI";
      elementsHtml += trendLine([[40, 110], [120, 130], [200, 100], [280, 80], [360, 95], [440, 60]], '#3b82f6', 2.5);
      elementsHtml += trendLine([[40, 140], [120, 138], [200, 128], [280, 115], [360, 108], [440, 92]], '#f59e0b', 1.5);
      elementsHtml += text(440, 80, "EMA 200", 9, '#f59e0b', 'end');
      elementsHtml += `
        <rect x="40" y="160" width="420" height="45" fill="#131a22" stroke="var(--border-color)" rx="4" />
        <line x1="40" y1="182" x2="460" y2="182" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2"/>
      `;
      elementsHtml += text(45, 172, "RSI > 50 (Alza)", 8, '#10b981');
      elementsHtml += trendLine([[40, 195], [120, 185], [200, 178], [280, 170], [360, 172], [440, 165]], '#10b981', 1.5);
      break;
    case 22:
      title = "Faro de Dirección (Estructura)";
      elementsHtml += `
        <path d="M 235,170 L 245,60 L 255,60 L 265,170 Z" fill="#1b222c" stroke="#3b82f6" stroke-width="2" />
        <rect x="242" y="45" width="16" height="15" fill="#f59e0b" rx="2" />
        <path d="M 250,52 L 150,10 C 150,10 100,50 150,90 Z" fill="rgba(245,158,11,0.05)" />
        <path d="M 250,52 L 350,10 C 350,10 400,50 350,90 Z" fill="rgba(245,158,11,0.05)" />
      `;
      elementsHtml += text(250, 30, "Estructura = Tu Faro", 11, '#f59e0b', 'middle', 'bold');
      elementsHtml += text(100, 150, "Ruido de Indicadores", 10, '#ef4444', 'middle');
      elementsHtml += arrow(160, 140, 220, 130, '#ef4444');
      break;
    case 23:
      title = "Cronograma Diario del Operador";
      elementsHtml += line(50, 110, 450, 110, 'var(--border-color)', 3);
      elementsHtml += circle(100, 110, 8, '#3b82f6');
      elementsHtml += text(100, 90, "Pre-market (Checklist)", 10, '#3b82f6', 'middle', 'bold');
      elementsHtml += circle(250, 110, 8, '#10b981');
      elementsHtml += text(250, 90, "Sesión Activa (Ejecutar)", 10, '#10b981', 'middle', 'bold');
      elementsHtml += circle(400, 110, 8, '#f59e0b');
      elementsHtml += text(400, 90, "Post-market (Audit)", 10, '#f59e0b', 'middle', 'bold');
      break;
    case 24:
      title = "Checklist pre-market Visión Pro";
      const drawCheckListItem = (y, str) => `
        <rect x="80" y="${y}" width="16" height="16" fill="none" stroke="#10b981" stroke-width="2" rx="3" />
        <polyline points="83 ${y+8}, 87 ${y+12}, 93 ${y+4}" fill="none" stroke="#10b981" stroke-width="2" />
        <text x="110" y="${y+13}" fill="#f3f4f6" font-size="11">${str}</text>
      `;
      elementsHtml += drawCheckListItem(45, "Filtro de tendencia EMA 200 verificado");
      elementsHtml += drawCheckListItem(80, "Ausencia de noticias macro inminentes");
      elementsHtml += drawCheckListItem(115, "Zona de valor institucional (POI) identificada");
      elementsHtml += drawCheckListItem(150, "Cálculo de riesgo (1%) realizado");
      break;
    case 25:
      title = "Pulsaciones vs Enfoque Estoico";
      elementsHtml += trendLine([[40, 160], [60, 100], [80, 170], [100, 90], [120, 180], [140, 60], [160, 150], [180, 160]], '#ef4444', 1.5);
      elementsHtml += text(110, 45, "Pulsaciones: 120bpm (Pánico)", 9, '#ef4444', 'middle');
      elementsHtml += trendLine([[220, 110], [250, 90], [280, 130], [310, 110], [340, 110], [370, 90], [400, 130], [430, 110]], '#3b82f6', 2.5);
      elementsHtml += text(325, 45, "Pulsaciones: 65bpm (Foco)", 9, '#3b82f6', 'middle');
      break;
    case 26:
      title = "Apagado y Cierre Operativo";
      elementsHtml += `
        <circle cx="250" cy="100" r="40" stroke="#ef4444" stroke-width="6" fill="none" />
        <line x1="250" y1="70" x2="250" y2="110" stroke="#ef4444" stroke-width="6" stroke-linecap="round" />
      `;
      elementsHtml += text(250, 170, "DESCONEXIÓN ABSOLUTA TRAS OPERAR", 11, '#ef4444', 'middle', 'bold');
      break;
    case 27:
      title = "Métricas Reales vs Planificadas";
      const drawBar = (x, h1, h2, label) => `
        <rect x="${x}" y="${160 - h1}" width="20" height="${h1}" fill="#3b82f6" rx="2" />
        <rect x="${x + 24}" y="${160 - h2}" width="20" height="${h2}" fill="#10b981" rx="2" />
        <text x="${x + 22}" y="180" fill="#9ca3af" font-size="9" text-anchor="middle">${label}</text>
      `;
      elementsHtml += drawBar(90, 80, 85, "Acierto (50%)");
      elementsHtml += drawBar(210, 60, 90, "Ratio R:R (1:2)");
      elementsHtml += drawBar(330, 90, 30, "Límite Pérdidas");
      elementsHtml += text(110, 40, "Objetivo", 9, '#3b82f6');
      elementsHtml += text(210, 40, "Real", 9, '#10b981');
      break;
    case 28:
      title = "Agrupación de Errores Operativos";
      elementsHtml += `
        <circle cx="250" cy="110" r="70" stroke="var(--border-color)" stroke-width="2" fill="none" />
        <circle cx="250" cy="110" r="50" stroke="var(--border-color)" stroke-width="2" fill="none" />
        <circle cx="250" cy="110" r="30" stroke="var(--border-color)" stroke-width="2" fill="none" />
        <circle cx="250" cy="110" r="10" stroke="#f59e0b" stroke-width="2" fill="#f59e0b" />
      `;
      elementsHtml += circle(240, 105, 4, '#3b82f6');
      elementsHtml += circle(255, 118, 4, '#3b82f6');
      elementsHtml += text(340, 100, "Técnicos (En setup)", 9, '#3b82f6');
      elementsHtml += circle(190, 80, 4, '#ef4444');
      elementsHtml += circle(310, 140, 4, '#ef4444');
      elementsHtml += text(340, 130, "Emocionales (FOMO)", 9, '#ef4444');
      break;
    case 29:
      title = "Bucle de Mejora Continua Estoica";
      elementsHtml += `
        <path d="M 250,30 A 70,70 0 1,1 180,100" fill="none" stroke="#3b82f6" stroke-width="3" />
        <path d="M 180,100 A 70,70 0 0,1 250,170" fill="none" stroke="#10b981" stroke-width="3" />
        <path d="M 250,170 A 70,70 0 0,1 250,30" fill="none" stroke="#f59e0b" stroke-width="3" />
      `;
      elementsHtml += text(250, 60, "PLANIFICAR", 10, '#3b82f6', 'middle', 'bold');
      elementsHtml += text(160, 115, "AUDITAR", 10, '#10b981', 'middle', 'bold');
      elementsHtml += text(310, 115, "MEJORAR", 10, '#f59e0b', 'middle', 'bold');
      break;
    case 30:
      title = "Pilar 4: Maestría en Trading Profesional";
      elementsHtml += `
        <rect x="140" y="30" width="220" height="150" fill="#131a22" stroke="#d4af37" stroke-width="3" rx="4" />
        <rect x="150" y="40" width="200" height="130" fill="none" stroke="rgba(212,175,55,0.2)" stroke-width="1" />
        <path d="M 220,130 C 210,130 200,120 200,100 C 200,80 220,70 230,70" fill="none" stroke="#d4af37" stroke-width="1.5" />
        <path d="M 280,130 C 290,130 300,120 300,100 C 300,80 280,70 270,70" fill="none" stroke="#d4af37" stroke-width="1.5" />
      `;
      elementsHtml += text(250, 60, "DIPLOMA", 11, '#d4af37', 'middle', 'bold');
      elementsHtml += text(250, 105, "MAESTRÍA", 10, '#f3f4f6', 'middle', 'bold');
      elementsHtml += text(250, 120, "TRADING PRO", 9, '#f3f4f6', 'middle');
      elementsHtml += text(250, 150, "Albert Sierra", 8, '#d4af37', 'middle', 'italic');
      break;
    case 31:
      title = "Estructura de Order Block (OB)";
      elementsHtml += volume(80, 25, false);
      elementsHtml += volume(140, 30, true);
      elementsHtml += volume(200, 42, true);
      elementsHtml += volume(260, 12, false);
      elementsHtml += volume(320, 18, false);
      elementsHtml += volume(380, 35, true);
      elementsHtml += candle(80, 120, 135, 110, 140, 'bear');
      elementsHtml += zone(70, 115, 20, 25, 'rgba(239, 68, 68, 0.08)', '#ef4444');
      elementsHtml += text(80, 155, "OB", 10, '#ef4444', 'middle', 'bold');
      elementsHtml += candle(140, 100, 60, 50, 110, 'bull');
      elementsHtml += candle(200, 60, 40, 30, 70, 'bull');
      elementsHtml += line(180, 40, 250, 40, '#3b82f6', 1, '2,2');
      elementsHtml += text(215, 30, "BOS", 9, '#3b82f6', 'middle');
      elementsHtml += candle(260, 50, 90, 45, 100, 'bear');
      elementsHtml += candle(320, 90, 120, 80, 130, 'bear'); // mitigates
      elementsHtml += circle(320, 120, 5, '#10b981');
      elementsHtml += text(320, 155, "Mitigación", 10, '#10b981', 'middle', 'bold');
      elementsHtml += candle(380, 110, 50, 40, 120, 'bull');
      break;
    case 32:
      title = "Sweeping Liquidity Pool";
      elementsHtml += volume(140, 25, false);
      elementsHtml += volume(200, 15, true);
      elementsHtml += volume(260, 28, false);
      elementsHtml += volume(290, 45, true);
      elementsHtml += line(60, 130, 440, 130, '#ef4444', 1.5, '4,4');
      elementsHtml += text(70, 120, "Soporte (Liquidez Minorista)", 10, '#9ca3af');
      elementsHtml += trendLine([[80,90], [140,130], [200,100], [260,130], [290,155], [340,70]], 'rgba(255,255,255,0.15)', 1.5);
      elementsHtml += candle(290, 110, 80, 70, 155, 'bull'); // sweeps support
      elementsHtml += circle(290, 150, 5, '#10b981');
      elementsHtml += text(290, 175, "SSL SWEEP (Absorción)", 10, '#10b981', 'middle', 'bold');
      break;
    case 33:
      title = "Vacío de Ineficiencia FVG (3 Velas)";
      elementsHtml += volume(120, 18, true);
      elementsHtml += volume(200, 45, true);
      elementsHtml += volume(280, 25, true);
      elementsHtml += candle(120, 160, 140, 150, 170, 'bull'); // Vela 1
      elementsHtml += candle(200, 140, 60, 50, 150, 'bull');  // Vela 2 (Expansión)
      elementsHtml += candle(280, 60, 40, 30, 70, 'bull');   // Vela 3
      elementsHtml += zone(160, 60, 160, 80, 'rgba(245, 158, 11, 0.08)', '#f59e0b');
      elementsHtml += line(120, 140, 200, 140, '#f59e0b', 1.5, '2,2');
      elementsHtml += line(280, 60, 200, 60, '#f59e0b', 1.5, '2,2');
      elementsHtml += text(200, 105, "Fair Value Gap (FVG)", 11, '#f59e0b', 'middle', 'bold');
      break;
    case 34:
      title = "Alineación HTF (Sesgo) + LTF (Entrada)";
      elementsHtml += zone(30, 30, 180, 160, 'rgba(59, 130, 246, 0.03)', 'var(--border-color)');
      elementsHtml += text(120, 50, "HTF Bias (1 Hora)", 10, '#3b82f6', 'middle', 'bold');
      elementsHtml += trendLine([[50, 150], [90, 110], [130, 120], [170, 70]], '#3b82f6', 2);
      elementsHtml += zone(290, 30, 180, 160, 'rgba(16, 185, 129, 0.03)', 'var(--border-color)');
      elementsHtml += text(380, 50, "LTF Entry (1 Minuto)", 10, '#10b981', 'middle', 'bold');
      elementsHtml += trendLine([[310, 140], [340, 110], [360, 125], [390, 90], [420, 100], [450, 60]], '#10b981', 1.5);
      elementsHtml += circle(390, 90, 4, '#10b981');
      elementsHtml += text(390, 80, "BOS + Gatillo", 9, '#10b981', 'middle');
      break;
    case 35:
      title = "Rango Premium vs Descuento";
      elementsHtml += line(60, 110, 440, 110, '#f59e0b', 2);
      elementsHtml += text(440, 100, "Equilibrio (50%)", 9, '#f59e0b', 'end');
      elementsHtml += zone(80, 30, 340, 80, 'rgba(239, 68, 68, 0.03)', 'rgba(239, 68, 68, 0.2)');
      elementsHtml += text(250, 75, "ZONA PREMIUM (No Compras - Vender Caro)", 11, '#ef4444', 'middle', 'bold');
      elementsHtml += zone(80, 110, 340, 80, 'rgba(16, 185, 129, 0.03)', 'rgba(16, 185, 129, 0.2)');
      elementsHtml += text(250, 155, "ZONA DE DESCUENTO (Comprar Barato)", 11, '#10b981', 'middle', 'bold');
      break;
    case 36:
      title = "Transición de OB Bajista Roto a Breaker Block";
      elementsHtml += volume(120, 28, true);
      elementsHtml += volume(180, 12, false);
      elementsHtml += volume(250, 38, true);
      elementsHtml += volume(320, 22, false);
      elementsHtml += zone(100, 70, 40, 40, 'rgba(239, 68, 68, 0.08)', '#ef4444');
      elementsHtml += text(120, 60, "OB Roto", 9, '#ef4444', 'middle');
      elementsHtml += trendLine([[60, 150], [120, 90], [180, 110], [250, 40], [320, 90], [390, 30]], '#3b82f6', 2.5);
      elementsHtml += line(140, 90, 350, 90, '#10b981', 1.5, '3,3');
      elementsHtml += circle(320, 90, 5, '#10b981');
      elementsHtml += text(320, 115, "Breaker (Test de Soporte)", 10, '#10b981', 'middle', 'bold');
      break;
    case 37:
      title = "Punto de Control de Perfil (POC)";
      elementsHtml += trendLine([[40, 150], [100, 110], [160, 130], [220, 90], [280, 120]], '#3b82f6', 2);
      const drawVolBar = (y, w) => `
        <rect x="${460 - w}" y="${y}" width="${w}" height="10" fill="#f59e0b20" stroke="#f59e0b44" rx="1" />
      `;
      elementsHtml += drawVolBar(50, 40);
      elementsHtml += drawVolBar(65, 60);
      elementsHtml += drawVolBar(80, 80);
      elementsHtml += drawVolBar(95, 150); // POC Peak
      elementsHtml += drawVolBar(110, 100);
      elementsHtml += drawVolBar(125, 70);
      elementsHtml += drawVolBar(140, 30);
      elementsHtml += line(260, 100, 460, 100, '#ef4444', 2);
      elementsHtml += text(265, 90, "POC de Volumen Máximo", 10, '#ef4444', 'start', 'bold');
      break;
    case 38:
      title = "Reglas de Fondeo (Preservación)";
      elementsHtml += `
        <rect x="70" y="40" width="360" height="140" fill="#131a22" stroke="var(--border-color)" rx="8" />
      `;
      elementsHtml += text(250, 65, "Capital de Operaciones: $50,000", 11, '#f3f4f6', 'middle', 'bold');
      elementsHtml += line(90, 80, 410, 80, 'var(--border-color)');
      elementsHtml += text(120, 115, "Límite Diario (2%):", 10, '#9ca3af');
      elementsHtml += text(380, 115, "-$1,000", 10, '#ef4444', 'end', 'bold');
      elementsHtml += text(120, 150, "Pérdida Máxima (5%):", 10, '#9ca3af');
      elementsHtml += text(380, 150, "-$2,500", 10, '#ef4444', 'end', 'bold');
      break;
    case 39:
      title = "Riesgo Cero tras Parciales";
      elementsHtml += volume(100, 22, true);
      elementsHtml += volume(180, 15, false);
      elementsHtml += volume(260, 35, true);
      elementsHtml += line(60, 130, 440, 130, '#3b82f6', 2);
      elementsHtml += text(70, 120, "Entrada (2 lotes)", 9, '#3b82f6');
      elementsHtml += line(60, 170, 440, 170, '#ef4444', 1.5, '2,2');
      elementsHtml += text(70, 160, "SL Inicial", 9, '#ef4444');
      elementsHtml += line(60, 90, 440, 90, '#10b981', 1.5, '2,2');
      elementsHtml += text(70, 80, "Toma de Parcial R:R 1:1 (Cierra 50%)", 9, '#10b981');
      elementsHtml += arrow(250, 160, 250, 135, '#10b981');
      elementsHtml += text(260, 150, "Mover SL a Entrada (Riesgo Cero)", 9, '#10b981', 'start');
      break;
    case 40:
      title = "Checklist de Albert Sierra";
      const drawCheckListItemFinal = (y, num, txt) => `
        <circle cx="80" cy="${y}" r="8" fill="#3b82f615" stroke="#3b82f6" stroke-width="1.5" />
        <text x="80" y="${y+3}" fill="#3b82f6" font-size="8" font-family="monospace" text-anchor="middle" font-weight="bold">${num}</text>
        <text x="105" y="${y+4}" fill="#f3f4f6" font-size="11" font-weight="500">${txt}</text>
      `;
      elementsHtml += drawCheckListItemFinal(40, "1", "Alineación de Contexto HTF (OB / FVG)");
      elementsHtml += drawCheckListItemFinal(75, "2", "Barrido de Liquidez previo (SSL/BSL)");
      elementsHtml += drawCheckListItemFinal(110, "3", "Ruptura de Estructura LTF (BOS 1m)");
      elementsHtml += drawCheckListItemFinal(145, "4", "Operar en Zona de Descuento (<50%)");
      elementsHtml += drawCheckListItemFinal(180, "5", "Tamaño de lote según 1% de riesgo");
      break;
    default:
      return "";
  }

  return `
    <div class="lesson-chart">
      <svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" xmlns="http://www.w3.org/2000/svg">
        ${elementsHtml}
      </svg>
      <div class="lesson-chart-title">
        <i data-lucide="bar-chart-2" style="width: 14px; height: 14px; color: var(--color-accent);"></i>
        <span>Gráfico de Apoyo: ${title}</span>
      </div>
    </div>
  `;
};


// Load Day details dynamically
window.loadDay = (dayId) => {
  const day = courseData[dayId];
  if (!day || !day.unlocked) return;

  activeDayId = dayId;
  activeSection = "academy-day";

  document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));

  const academyDaySection = document.getElementById("academy-day");
  if (academyDaySection) {
    academyDaySection.classList.add("active");
  }

  // Set visual texts
  document.getElementById("academy-day-title").innerHTML = `<i data-lucide="book-open"></i> Día ${dayId.replace("day", "")}: ${day.title}`;
  
  const dayNum = parseInt(dayId.replace("day", ""));
  const graphicHtml = getGraphicForDay(dayNum);
  document.getElementById("academy-day-content").innerHTML = (graphicHtml || "") + day.content;
  document.getElementById("academy-challenge-text").innerText = day.challenge;
  
  document.getElementById("btn-narrate-day").setAttribute("data-day", dayId);

  // Load saved challenge text
  const savedResponse = localStorage.getItem(`vision_challenge_${dayId}`) || "";
  document.getElementById("challenge-response").value = savedResponse;

  // Toggle Quiz displaying if review day
  const quizCard = document.getElementById("academy-quiz-card");
  
  if ([7, 15, 22, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40].includes(dayNum)) {
    quizCard.style.display = "block";
    renderPilarQuiz(day.pilar);
  } else {
    quizCard.style.display = "none";
  }

  // Toggle Next Lesson button
  const nextBtn = document.getElementById("btn-next-lesson-audio");
  if (nextBtn) {
    const nextDayId = `day${dayNum + 1}`;
    if (courseData[nextDayId]) {
      nextBtn.style.display = "inline-flex";
    } else {
      nextBtn.style.display = "none";
    }
  }

  activePilarAccordion = day.pilar;
  renderAcademicMenu();
  stopAllSpeech();
  lucide.createIcons();
};

const renderPilarQuiz = (pilarId) => {
  activeQuizAnswers = {};
  const container = document.getElementById("academy-quiz-container");
  if (!container) return;

  const questions = pilarQuizzes[pilarId];
  if (!questions) return;

  let html = `<div class="quiz-questions-wrapper">`;

  questions.forEach((qObj, qIndex) => {
    html += `
      <div class="quiz-question-block" style="margin-bottom: 24px; border-bottom: 1px dashed var(--border-color); padding-bottom: 20px;" data-q-index="${qIndex}">
        <p class="quiz-question" style="font-size: 1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">${qIndex + 1}. ${qObj.q}</p>
        <div class="quiz-options" style="display:flex; flex-direction:column; gap:8px;">
    `;

    qObj.options.forEach((opt, optIndex) => {
      html += `
        <button class="quiz-option" onclick="handleSelectOption(${pilarId}, ${qIndex}, ${optIndex}, this)">
          ${opt}
        </button>
      `;
    });

    html += `
        </div>
        <div class="quiz-feedback" id="feedback-pilar-${pilarId}-${qIndex}"></div>
      </div>
    `;
  });

  html += `</div>`;

  // Submit button
  html += `
    <div class="quiz-action-bar">
      <button class="btn btn-success" id="btn-submit-quiz-pilar" onclick="submitPilarQuiz(${pilarId})" disabled>
        <i data-lucide="check"></i> Evaluar Cuestionario Semanal
      </button>
    </div>
  `;

  container.innerHTML = html;
  lucide.createIcons();
};

// Handle quiz option selecting
window.handleSelectOption = (pilarId, qIndex, optIndex, buttonElement) => {
  if (pilarPassedStates[pilarId]) return; // Stop if already passed

  const questionBlock = buttonElement.closest(".quiz-question-block");
  questionBlock.querySelectorAll(".quiz-option").forEach(btn => {
    btn.classList.remove("correct", "incorrect");
    btn.style.borderColor = "var(--border-color)";
    btn.style.background = "var(--bg-tertiary)";
  });

  buttonElement.style.borderColor = "var(--color-accent)";
  buttonElement.style.background = "rgba(59, 130, 246, 0.08)";

  activeQuizAnswers[qIndex] = optIndex;

  const total = pilarQuizzes[pilarId].length;
  const answered = Object.keys(activeQuizAnswers).length;
  
  const submitBtn = document.getElementById("btn-submit-quiz-pilar");
  if (submitBtn) {
    submitBtn.disabled = answered !== total;
  }
};

// Evaluate Pilar Quiz answers
window.submitPilarQuiz = (pilarId) => {
  const container = document.getElementById("academy-quiz-container");
  const questions = pilarQuizzes[pilarId];
  let correctCount = 0;

  questions.forEach((qObj, qIndex) => {
    const selected = activeQuizAnswers[qIndex];
    const questionBlock = container.querySelector(`[data-q-index="${qIndex}"]`);
    const options = questionBlock.querySelectorAll(".quiz-option");
    const feedbackEl = document.getElementById(`feedback-pilar-${pilarId}-${qIndex}`);

    options.forEach(btn => btn.classList.add("disabled"));

    if (selected === qObj.answer) {
      correctCount++;
      options[selected].classList.add("correct");
      feedbackEl.className = "quiz-feedback correct";
      feedbackEl.innerHTML = `<strong>🟢 ¡Correcto!</strong> ${qObj.explanation}`;
    } else {
      options[selected].classList.add("incorrect");
      options[qObj.answer].classList.add("correct");
      feedbackEl.className = "quiz-feedback incorrect";
      feedbackEl.innerHTML = `<strong>🔴 Incorrecto.</strong> ${qObj.explanation}`;
    }
  });

  const passed = correctCount === questions.length;
  const actionBar = container.querySelector(".quiz-action-bar");

  if (passed) {
    pilarPassedStates[pilarId] = true;
    
    // Mark the review day as completed
    courseData[activeDayId].completed = true;
    
    // Unlock next day
    const dayNum = parseInt(activeDayId.replace("day", ""));
    const nextDayId = `day${dayNum + 1}`;
    if (courseData[nextDayId]) {
      courseData[nextDayId].unlocked = true;
    }

    saveProgress();
    updateUIProgress();
    renderAcademicMenu();

    actionBar.innerHTML = `
      <div class="quiz-completed-overlay" style="width: 100%;">
        <div class="quiz-score-circle">5/5</div>
        <h4 style="color: var(--color-bull); margin-bottom: 8px;">🎉 Pilar Aprobado con Éxito</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Has asimilado perfectamente las reglas innegociables de este pilar.</p>
        ${courseData[nextDayId]
          ? `<button class="btn btn-success" onclick="window.loadDay('${nextDayId}')">Siguiente Semana <i data-lucide='arrow-right'></i></button>`
          : `<button class="btn btn-success" onclick="showSection('certificate')">Obtener Mi Diploma <i data-lucide='award'></i></button>`
        }
      </div>
    `;
  } else {
    actionBar.innerHTML = `
      <div class="quiz-completed-overlay" style="width: 100%;">
        <div class="quiz-score-circle fail">${correctCount}/5</div>
        <h4 style="color: var(--color-bear); margin-bottom: 8px;">⚠️ Cuestionario No Superado</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Para avanzar de pilar debes responder correctamente el 100% de las preguntas operativas.</p>
        <button class="btn btn-secondary" onclick="renderPilarQuiz(${pilarId})">Reintentar Cuestionario</button>
      </div>
    `;
  }
  lucide.createIcons();
};

// Technical Glossary terms database
const glossaryTerms = [
  { term: "CME (Chicago Mercantile Exchange)", desc: "El mercado y bolsa regulada centralizada más grande del mundo para la negociación de contratos de futuros de índices, divisas y materias primas." },
  { term: "Margin Call (Llamada de Margen)", desc: "Aviso de advertencia del broker cuando el capital de tu cuenta cae por debajo del margen de mantenimiento debido a pérdidas flotantes. Conlleva la liquidación inmediata de posiciones." },
  { term: "Daily Drawdown", desc: "El límite máximo de pérdidas permitido en un solo día operativo. Sirve de freno financiero para proteger al trader de rachas perdedoras desastrosas." },
  { term: "BOS (Break of Structure)", desc: "Quiebre de Estructura. Ocurre cuando el precio quiebra con fuerza el último mínimo ascendente (HL) en tendencia alcista o el máximo descendente (LH) en tendencia bajista, indicando giros." },
  { term: "Tick y Punto", desc: "Fluctuaciones de precio. Un Tick es el movimiento mínimo de cotización (0.25 en ES/NQ). Un Punto equivale a 4 ticks enteros ($50 en ES, $20 en NQ por contrato)." },
  { term: "FVG (Fair Value Gap)", desc: "Iniciativa e ineficiencia en el precio provocada por compras o ventas agresivas que dejan un desequilibrio de liquidez en un patrón de 3 velas consecutivas." },
  { term: "Order Block (Bloque de Órdenes)", desc: "Zonas de precios donde las instituciones financieras acumularon un volumen masivo de órdenes de compra o venta en el pasado y donde se espera una reacción fuerte." },
  { term: "Slippage (Deslizamiento)", desc: "La diferencia de precio entre el valor solicitado de tu orden de compra/venta y el precio real al que se ejecuta en el mercado debido a la volatilidad." },
  { term: "Asimetría Matemática", desc: "La relación donde la ganancia promedio de tus aciertos es considerablemente mayor a la pérdida promedio de tus trades perdedores (R:B 1:2 o superior)." },
  { term: "FOMO", desc: "Miedo a quedar fuera (Fear of Missing Out). Impulso psicológico destructivo que empuja al trader a comprar precios inflados o vender precios bajos sin esperar a su setup." }
];

const renderGlossary = () => {
  const container = document.getElementById("glossary-container");
  if (!container) return;

  let html = "";
  glossaryTerms.forEach(item => {
    html += `
      <div class="concept-card">
        <div class="concept-card-title"><i data-lucide="book-open" style="width:14px; height:14px; color:var(--color-accent);"></i> ${item.term}</div>
        <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin-top: 5px;">${item.desc}</p>
      </div>
    `;
  });
  
  container.innerHTML = html;
  lucide.createIcons();
};

// Render Certificate Completion info
const renderCertificate = () => {
  const nameInput = document.getElementById("cert-student-name");
  const dateText = document.getElementById("cert-date-str");
  
  if (nameInput) {
    const storedName = localStorage.getItem("vision_student_name") || "Albert Sierra";
    nameInput.textContent = storedName;
  }
  if (dateText) {
    dateText.textContent = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  }
};

const getApiKey = () => {
  const stored = localStorage.getItem("vision_elevenlabs_api_key");
  if (!stored || stored === "null" || stored === "undefined" || stored.trim() === "") {
    return "sk_cf0eff44faa9a9838a53af3850a02dc60c96e883b95570ce";
  }
  return stored.trim();
};

const getVoiceId = () => {
  const stored = localStorage.getItem("vision_elevenlabs_voice_id");
  if (!stored || stored === "null" || stored === "undefined" || stored.trim() === "") {
    return "c6rAmJGsdzNWAIVkws45"; // Default voice ID (Albert Sierra)
  }
  return stored.trim();
};

// Audio Narration functions with ElevenLabs & Browser Web Speech
let activeAudio = null;
let activeNarratorButton = null;

const stopAllSpeech = () => {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  
  const btn = document.getElementById("btn-narrate-day");
  if (btn) {
    btn.classList.remove("active");
    btn.style.background = "";
    btn.style.color = "";
    btn.style.borderColor = "";
    const span = btn.querySelector("span");
    if (span) span.textContent = "Narrar Lección";
    const icon = btn.querySelector("i");
    if (icon) icon.setAttribute("data-lucide", "volume-2");
  }
  lucide.createIcons();
  activeNarratorButton = null;
};

const handleNarrateClick = async (dayId, button) => {
  if (button === activeNarratorButton) {
    stopAllSpeech();
    return;
  }

  stopAllSpeech();

  const day = courseData[dayId];
  if (!day) return;

  const container = document.getElementById("academy-day-content");
  if (!container) return;

  const textToRead = container.innerText || container.textContent;
  const apiKey = getApiKey();
  const voiceId = getVoiceId();

  if (apiKey) {
    try {
      button.disabled = true;
      button.classList.add("loading");
      button.querySelector("span").textContent = "Generando Audio...";
      
      console.log(`[Narrador] Enviando petición a ElevenLabs. Voice ID: ${voiceId}`);
      
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": apiKey
        },
        body: JSON.stringify({
          text: textToRead.substring(0, 4800), // Safety cap limit
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.75,
            similarity_boost: 0.85,
            style: 0.05,
            use_speaker_boost: true
          }
        })
      });

      if (!response.ok) {
        let errMsg = `Código ${response.status}`;
        try {
          const errJson = await response.json();
          if (errJson && errJson.detail && errJson.detail.message) {
            errMsg = errJson.detail.message;
          }
        } catch (e) {
          errMsg = response.statusText || errMsg;
        }
        throw new Error(errMsg);
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      activeAudio = new Audio(audioUrl);
      
      button.disabled = false;
      button.classList.remove("loading");
      button.classList.add("active");
      button.style.background = "rgba(16, 185, 129, 0.15)";
      button.style.color = "var(--color-bull)";
      button.style.borderColor = "var(--color-bull)";
      button.querySelector("span").textContent = "Detener";
      button.querySelector("i").setAttribute("data-lucide", "square");
      lucide.createIcons();
      activeNarratorButton = button;

      console.log(`[Narrador] Reproduciendo audio generado por ElevenLabs.`);
      activeAudio.play();
      activeAudio.onended = () => {
        stopAllSpeech();
      };
    } catch (err) {
      button.disabled = false;
      button.classList.remove("loading");
      button.querySelector("span").textContent = "Narrar Lección";
      console.warn(`[Narrador] Error con ElevenLabs: ${err.message}. Usando fallback.`);
      alert(`Error con ElevenLabs: ${err.message}. Usando el narrador gratuito por defecto...`);
      speakBrowser(textToRead, button);
    }
  } else {
    console.log(`[Narrador] No hay API Key configurada. Usando Web Speech API del navegador.`);
    speakBrowser(textToRead, button);
  }
};

const speakBrowser = (text, button) => {
  if (!window.speechSynthesis) {
    alert("Tu navegador no soporta síntesis de voz.");
    return;
  }

  window.speechSynthesis.cancel();
  const cleanText = text.replace(/\s+/g, " ").trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = "es-ES";
  
  const voices = window.speechSynthesis.getVoices();
  // Intentar buscar una voz en español masculina por nombre/palabras clave
  let esVoice = voices.find(v => {
    const nameLower = v.name.toLowerCase();
    const isSpanish = v.lang.startsWith("es-ES") || v.lang.startsWith("es");
    const isMale = nameLower.includes("male") || 
                   nameLower.includes("hombre") || 
                   nameLower.includes("jorge") || 
                   nameLower.includes("alvaro") || 
                   nameLower.includes("david") || 
                   nameLower.includes("julio");
    return isSpanish && isMale;
  });

  if (!esVoice) {
    esVoice = voices.find(v => v.lang.startsWith("es-ES") || v.lang.startsWith("es"));
  }

  if (esVoice) {
    utterance.voice = esVoice;
  }

  utterance.onstart = () => {
    button.classList.add("active");
    button.style.background = "rgba(59, 130, 246, 0.15)";
    button.style.color = "var(--color-accent)";
    button.style.borderColor = "var(--color-accent)";
    button.querySelector("span").textContent = "Detener";
    button.querySelector("i").setAttribute("data-lucide", "square");
    lucide.createIcons();
    activeNarratorButton = button;
  };

  utterance.onend = () => {
    stopAllSpeech();
  };

  utterance.onerror = () => {
    stopAllSpeech();
  };

  window.speechSynthesis.speak(utterance);
};

// Export Trading Plan custom generator
const exportTradingPlan = () => {
  const capital = document.getElementById("calc-capital").value || "10000";
  const riskPct = document.getElementById("calc-risk-pct").value || "1";
  const assetSelect = document.getElementById("calc-asset");
  const assetName = assetSelect ? assetSelect.options[assetSelect.selectedIndex].text : "E-mini S&P 500 (ES)";
  const slPuntos = document.getElementById("calc-sl-ticks").value || "10";
  
  const riskMoney = document.getElementById("res-risk-money") ? document.getElementById("res-risk-money").textContent : `$${(capital * riskPct / 100).toFixed(2)}`;
  const contracts = document.getElementById("res-contracts") ? document.getElementById("res-contracts").textContent : "0 Contratos";
  
  const planWindow = window.open("", "_blank");
  planWindow.document.write(`
    <html>
    <head>
      <title>Plan de Trading Personalizado - Visión Trading Pro</title>
      <style>
        body {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          background-color: #ffffff;
          color: #0b0e14;
          padding: 45px;
          line-height: 1.6;
        }
        .header {
          text-align: center;
          border-bottom: 2px solid #10b981;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          color: #0b0e14;
          margin: 0;
          letter-spacing: 1.5px;
        }
        .subtitle {
          font-size: 11px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-top: 5px;
        }
        .section {
          margin-bottom: 30px;
        }
        .section-title {
          font-size: 15px;
          font-weight: bold;
          color: #10b981;
          border-bottom: 1.5px solid #e5e7eb;
          padding-bottom: 5px;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .item {
          background: #f9fafb;
          padding: 12px 16px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }
        .label {
          font-size: 10px;
          color: #6b7280;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 0.5px;
        }
        .value {
          font-size: 16px;
          font-weight: bold;
          color: #0b0e14;
          margin-top: 4px;
        }
        .rules-list {
          padding-left: 20px;
          margin: 0;
        }
        .rules-list li {
          margin-bottom: 12px;
        }
        .footer {
          margin-top: 60px;
          text-align: center;
          font-size: 11px;
          color: #9ca3af;
          border-top: 1px solid #e5e7eb;
          padding-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="title">PLAN DE TRADING PERSONALIZADO</div>
        <div class="subtitle">Estrategia Cuantitativa - Visión Trading Pro</div>
      </div>
      
      <div class="section">
        <div class="section-title">Parámetros de Capital y Gestión de Riesgo</div>
        <div class="grid">
          <div class="item">
            <div class="label">Capital Operativo</div>
            <div class="value">$${parseFloat(capital).toLocaleString('en-US', {minimumFractionDigits: 2})} USD</div>
          </div>
          <div class="item">
            <div class="label">Riesgo Permitido por Operación</div>
            <div class="value">${riskPct}% por Operación</div>
          </div>
          <div class="item">
            <div class="label">Riesgo Máximo en Dinero</div>
            <div class="value" style="color: #ef4444;">${riskMoney}</div>
          </div>
          <div class="item">
            <div class="label">Tamaño de Posición Óptimo</div>
            <div class="value" style="color: #3b82f6;">${contracts}</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Reglas Operativas de Ejecución</div>
        <ul class="rules-list">
          <li><strong>Dirección de Tendencia (Filtro EMA 200)</strong>: Solo buscar compras si el precio está arriba de la EMA 200. Solo buscar ventas si está abajo. Está terminantemente prohibido operar en contra de la pendiente de la EMA 200.</li>
          <li><strong>Gatillo de Impulso (RSI 14)</strong>: Esperar el cruce de RSI sobre la línea central de 50 (en vela cerrada) para largos o bajo 50 para cortos. La entrada se realiza estrictamente en la apertura de la vela siguiente.</li>
          <li><strong>Fijación del Stop Loss Técnico</strong>: Ubicar el Stop Loss 1 punto por debajo del mínimo de oscilación reciente (Swing Low) para largos o por encima del máximo reciente (Swing High) para cortos. No usar tamaños aleatorios.</li>
          <li><strong>Salida Asimétrica Take Profit</strong>: Colocar el Take Profit exactamente a un ratio 1:2. Por cada dólar arriesgado en el stop loss, ir a buscar dos dólares de ganancia en el take profit.</li>
          <li><strong>Drawdown Máximo Diario</strong>: Pérdida diaria máxima fijada en 2 operaciones fallidas consecutivas (2%). Al alcanzar este límite, se apagarán las pantallas de inmediato sin excepciones emocionales.</li>
        </ul>
      </div>

      <div class="section">
        <div class="section-title">Compromiso de Disciplina</div>
        <p><em>"Entiendo que el mercado es un entorno de probabilidades y no de certezas. Mi trabajo no es tener la razón en cada operación individual, sino ejecutar mi ventaja estadística con disciplina inquebrantable y dejar que las matemáticas jueguen a mi favor en el largo plazo."</em></p>
      </div>

      <div class="footer">
        Plan de Trading Personalizado &copy; 2026. Generado bajo la guía de Visión Trading Pro.
      </div>

      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `);
  planWindow.document.close();
};

// Initialize app components on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  // Force initialize or upgrade the API Key if empty, corrupt, or matching the old key
  const currentKey = localStorage.getItem("vision_elevenlabs_api_key");
  const defaultKey = "sk_cf0eff44faa9a9838a53af3850a02dc60c96e883b95570ce";
  const oldKey = "sk_d3c40fb422b9d257c30601542793b1787034f3e29f41d984";

  if (!currentKey || currentKey === "null" || currentKey === "undefined" || currentKey.trim() === "" || currentKey === oldKey) {
    localStorage.setItem("vision_elevenlabs_api_key", defaultKey);
  }

  // Navigation Menu Event Listeners
  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-target");
      showSection(target);
    });
  });

  // Narrate click listener
  const btnNarrate = document.getElementById("btn-narrate-day");
  if (btnNarrate) {
    btnNarrate.addEventListener("click", () => {
      const dayId = btnNarrate.getAttribute("data-day");
      handleNarrateClick(dayId, btnNarrate);
    });
  }

  // Save Challenge Response listener
  const btnSaveChallenge = document.getElementById("btn-save-challenge");
  if (btnSaveChallenge) {
    btnSaveChallenge.addEventListener("click", () => {
      const response = document.getElementById("challenge-response").value.trim();
      if (!response) {
        alert("Escribe una respuesta para el desafío de hoy antes de guardarlo en tu bitácora.");
        return;
      }

      localStorage.setItem(`vision_challenge_${activeDayId}`, response);
      alert("¡Entrada de Bitácora Guardada con Éxito!");

      const dayNum = parseInt(activeDayId.replace("day", ""));
      const isExamDay = [7, 15, 22, 30].includes(dayNum);

      if (!isExamDay) {
        courseData[activeDayId].completed = true;
        
        const nextDayId = `day${dayNum + 1}`;
        if (courseData[nextDayId]) {
          courseData[nextDayId].unlocked = true;
        }
        
        saveProgress();
        updateUIProgress();
        renderAcademicMenu();
      } else {
        const pilarId = courseData[activeDayId].pilar;
        if (pilarPassedStates[pilarId]) {
          courseData[activeDayId].completed = true;
          const nextDayId = `day${dayNum + 1}`;
          if (courseData[nextDayId]) {
            courseData[nextDayId].unlocked = true;
          }
          saveProgress();
          updateUIProgress();
          renderAcademicMenu();
        } else {
          alert("Desafío guardado. Recuerda que para avanzar debes aprobar el examen semanal de abajo con 100% de aciertos.");
        }
      }
    });
  }

  // Toggle Focus Mode listener
  const btnToggleFocus = document.getElementById("btn-toggle-focus");
  if (btnToggleFocus) {
    btnToggleFocus.addEventListener("click", () => {
      const body = document.body;
      body.classList.toggle("focus-mode-active");
      
      const span = btnToggleFocus.querySelector("span");
      const icon = btnToggleFocus.querySelector("i");
      
      if (body.classList.contains("focus-mode-active")) {
        span.textContent = "Salir Enfoque";
        if (icon) icon.setAttribute("data-lucide", "minimize-2");
      } else {
        span.textContent = "Modo Enfoque";
        if (icon) icon.setAttribute("data-lucide", "maximize-2");
      }
      lucide.createIcons();
    });
  }

  // Export Plan listener
  const btnExportPlan = document.getElementById("btn-export-plan");
  if (btnExportPlan) {
    btnExportPlan.addEventListener("click", exportTradingPlan);
  }

  // Print Certificate listener
  const btnPrintCert = document.getElementById("btn-print-cert");
  if (btnPrintCert) {
    btnPrintCert.addEventListener("click", () => {
      // Prompt for name customization
      const currentName = localStorage.getItem("vision_student_name") || "Albert Sierra";
      const customizedName = prompt("Escribe tu nombre y apellido tal como deseas que aparezca en tu diploma:", currentName);
      
      if (customizedName !== null && customizedName.trim() !== "") {
        localStorage.setItem("vision_student_name", customizedName.trim());
        renderCertificate();
        window.print();
      } else if (customizedName !== null) {
        alert("Por favor introduce un nombre válido.");
      }
    });
  }

  // Audio settings modal setup
  const btnAudioSettings = document.getElementById("btn-audio-settings");
  const audioSettingsModal = document.getElementById("audio-settings-modal");
  const btnCloseAudioModal = document.getElementById("btn-close-audio-modal");
  const btnSaveAudioSettings = document.getElementById("btn-save-audio-settings");
  const elApiKeyInput = document.getElementById("el-api-key");
  const elVoiceSelect = document.getElementById("el-voice-select");
  const elCustomVoiceGroup = document.getElementById("el-custom-voice-group");
  const elVoiceIdInput = document.getElementById("el-voice-id");

  if (btnAudioSettings) {
    elApiKeyInput.value = getApiKey();

    // Initialize voice select from localStorage
    const savedVoiceId = localStorage.getItem("vision_elevenlabs_voice_id") || "c6rAmJGsdzNWAIVkws45";
    if (elVoiceSelect) {
      if (["c6rAmJGsdzNWAIVkws45", "ErXwobaYiN019PkySvjV"].includes(savedVoiceId)) {
        elVoiceSelect.value = savedVoiceId;
        if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "none";
      } else {
        elVoiceSelect.value = "custom";
        if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "block";
      }
      if (elVoiceIdInput) elVoiceIdInput.value = savedVoiceId;
    }

    if (elVoiceSelect) {
      elVoiceSelect.addEventListener("change", () => {
        if (elVoiceSelect.value === "custom") {
          if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "block";
        } else {
          if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "none";
          if (elVoiceIdInput) elVoiceIdInput.value = elVoiceSelect.value;
        }
      });
    }

    btnAudioSettings.addEventListener("click", () => {
      audioSettingsModal.style.display = "flex";
    });

    btnCloseAudioModal.addEventListener("click", () => {
      audioSettingsModal.style.display = "none";
    });

    btnSaveAudioSettings.addEventListener("click", () => {
      const apiKey = elApiKeyInput.value.trim();
      const voiceId = elVoiceIdInput ? elVoiceIdInput.value.trim() : "";
      
      if (apiKey) {
        localStorage.setItem("vision_elevenlabs_api_key", apiKey);
      } else {
        localStorage.removeItem("vision_elevenlabs_api_key");
      }

      if (voiceId) {
        localStorage.setItem("vision_elevenlabs_voice_id", voiceId);
      } else {
        localStorage.removeItem("vision_elevenlabs_voice_id");
      }

      alert("Configuración de audio guardada correctamente.");
      audioSettingsModal.style.display = "none";
    });

    audioSettingsModal.addEventListener("click", (e) => {
      if (e.target === audioSettingsModal) {
        audioSettingsModal.style.display = "none";
      }
    });
  }

  // Load progress, render accordions, render glossary
  loadProgress();
  renderAcademicMenu();
  renderGlossary();
});

// Global Function to navigate to the next lesson and trigger audio narration automatically
window.goToNextLesson = (autoPlayAudio) => {
  const currentDayNum = parseInt(activeDayId.replace("day", ""));
  const nextDayId = `day${currentDayNum + 1}`;

  if (!courseData[nextDayId]) {
    alert("Has completado todo el curso. ¡Felicidades, Trader Soberano!");
    return;
  }

  // Save current challenge response automatically if they wrote something
  const responseField = document.getElementById("challenge-response");
  const responseText = responseField ? responseField.value.trim() : "";

  if (responseText) {
    localStorage.setItem(`vision_challenge_${activeDayId}`, responseText);
    const dayNum = parseInt(activeDayId.replace("day", ""));
    const isExamDay = [7, 15, 22, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40].includes(dayNum);

    if (!isExamDay) {
      courseData[activeDayId].completed = true;
      courseData[nextDayId].unlocked = true;
      saveProgress();
      updateUIProgress();
      renderAcademicMenu();
    } else {
      const pilarId = courseData[activeDayId].pilar;
      if (pilarPassedStates[pilarId]) {
        courseData[activeDayId].completed = true;
        courseData[nextDayId].unlocked = true;
        saveProgress();
        updateUIProgress();
        renderAcademicMenu();
      } else {
        alert("Desafío guardado. Recuerda que para avanzar de pilar debes aprobar la evaluación semanal de abajo.");
        return;
      }
    }
  } else if (!courseData[nextDayId].unlocked) {
    alert("Debes escribir y registrar tu respuesta al desafío de hoy antes de avanzar.");
    return;
  }

  // Load next day
  window.loadDay(nextDayId);

  // Auto-play audio if requested
  if (autoPlayAudio) {
    setTimeout(() => {
      const btnNarrate = document.getElementById("btn-narrate-day");
      if (btnNarrate) {
        handleNarrateClick(nextDayId, btnNarrate);
      }
    }, 450);
  }
};
