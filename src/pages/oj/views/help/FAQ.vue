<template>
  <panel>
    <div slot="title">{{$t('m.Frequently_Asked_Questions')}}</div>
    <div class="content markdown-body">
      
      <!-- Introducción -->
      <div class="faq-intro">
        <p>Bienvenido a la sección de Preguntas Frecuentes. Aquí encontrarás información detallada sobre los distintos aspectos del sistema y cómo resolver problemas comunes al enviar tus soluciones de programación.</p>
      </div>

      <ul class="faq-list">
        
        <li class="faq-item">
          <h3 class="faq-question">¿Dónde está la entrada y la salida?</h3>
          <div class="faq-answer">
            <p>Tu programa debe leer la entrada desde <code>stdin</code> ('Entrada Estándar') y escribir la salida a <code>stdout</code> ('Salida Estándar'). Por ejemplo, podés usar <code>scanf</code> en C o <code>cin</code> en C++ para leer desde stdin, y usar <code>printf</code> en C o <code>cout</code> en C++ para escribir a stdout.</p>
            
            <div class="code-examples">
              <div class="code-example">
                <h4>C++</h4>
                <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int a, b;
    while(cin >> a >> b) {
        cout << a + b << endl;
    }
    return 0;
}</code></pre>
              </div>

              <div class="code-example">
                <h4>C</h4>
                <pre><code>#include &lt;stdio.h&gt;

int main() {
    int a, b;
    while(scanf("%d %d", &a, &b) != EOF) {
        printf("%d\n", a + b);
    }
    return 0;
}</code></pre>
              </div>

              <div class="code-example">
                <h4>Java</h4>
                <pre><code>import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        int a, b;
        while (cin.hasNext()) {
            a = cin.nextInt();
            b = cin.nextInt();
            System.out.println(a + b);
        }
    }
}</code></pre>
              </div>

              <div class="code-example">
                <h4>Python (Plantilla Codeforces)</h4>
                <pre><code>import sys
input = sys.stdin.readline

# Función para entrada rápida
def inp():
    return int(input())

def inlt():
    return list(map(int, input().split()))

def insr():
    return input().strip()

# Leer hasta EOF
try:
    while True:
        a, b = map(int, input().split())
        print(a + b)
except EOFError:
    pass</code></pre>
              </div>
            </div>
            
            <p><strong>Importante:</strong> Los programas de usuario no pueden leer o escribir archivos, o obtendrás un <code>Runtime Error</code>.</p>
          </div>
        </li>

        <li class="faq-item">
          <h3 class="faq-question">¿Cuál es el significado del tiempo de ejecución de la solución enviada?</h3>
          <div class="faq-answer">
            <p>El juez en línea podría probar tu código múltiples veces con diferentes archivos de entrada. Si tu código da la respuesta correcta dentro del límite de tiempo para cada archivo de entrada, el tiempo de ejecución mostrado es el máximo del tiempo gastado para cada caso de prueba. De lo contrario, el tiempo de ejecución no tendrá sentido.</p>
          </div>
        </li>

        <li class="faq-item">
          <h3 class="faq-question">¿Cómo puedo usar C++ Int64?</h3>
          <div class="faq-answer">
            <p>Deberías declarar como <code>long long</code> y usar con <code>cin/cout</code> o <code>%lld</code>. Usar <code>__int64</code> resultará en <code>Compile Error</code>.</p>
            <pre><code>long long numero_grande;
scanf("%lld", &numero_grande);
printf("%lld\n", numero_grande);

// O en C++:
long long numero_grande;
cin >> numero_grande;
cout << numero_grande << endl;</code></pre>
          </div>
        </li>

        <li class="faq-item">
          <h3 class="faq-question">¿Especificaciones de Java?</h3>
          <div class="faq-answer">
            <p>Todos los programas deben comenzar en un método main estático en una clase <code>Main</code>. No uses clases públicas: incluso <code>Main</code> debe ser no público para evitar errores de compilación.</p>
            <pre><code>import java.util.*;

class Main {  // Sin 'public'
    public static void main(String[] args) {
        // tu código aquí
    }
}</code></pre>
            <p><strong>Tip:</strong> Usá E/O con buffer para evitar exceder el límite de tiempo debido al exceso de vaciado.</p>
          </div>
        </li>

        <li class="faq-item">
          <h3 class="faq-question">¿Acerca del error de presentación?</h3>
          <div class="faq-answer">
            <p>No hay error de presentación en este oj. El evaluador recortará los espacios y saltos en la <strong>última</strong> línea de tu salida. Si aún es diferente de la salida correcta, el resultado será <code>Wrong Answer</code>.</p>
          </div>
        </li>

        <li class="faq-item">
          <h3 class="faq-question">¿Qué significan los diferentes estados de evaluación?</h3>
          <div class="faq-answer">
            <div class="status-explanations">
              <div class="status-item accepted">
                <strong>Accepted (AC):</strong> ¡Felicitaciones! Tu solución es correcta y ha pasado todas las pruebas.
              </div>
              <div class="status-item wrong-answer">
                <strong>Wrong Answer (WA):</strong> Tu solución no produce el resultado correcto para los casos de prueba. Revisa tu lógica.
              </div>
              <div class="status-item time-limit">
                <strong>Time Limit Exceeded (TLE):</strong> Tu solución no se ejecutó dentro del tiempo máximo permitido. Optimiza tu algoritmo.
              </div>
              <div class="status-item memory-limit">
                <strong>Memory Limit Exceeded (MLE):</strong> Tu programa usó más memoria de la permitida.
              </div>
              <div class="status-item runtime-error">
                <strong>Runtime Error (RE):</strong> Tu programa falló durante la ejecución (división por cero, acceso inválido a memoria, etc.).
              </div>
              <div class="status-item compile-error">
                <strong>Compile Error (CE):</strong> Tu código tiene errores de sintaxis que impiden la compilación.
              </div>
              <div class="status-item pending">
                <strong>Pending:</strong> Tu solución está en cola esperando ser evaluada.
              </div>
            </div>
          </div>
        </li>

        <li class="faq-item">
          <h3 class="faq-question">Mi solución es muy lenta, ¿qué puedo hacer?</h3>
          <div class="faq-answer">
            <p>Si recibís <strong>Time Limit Exceeded</strong>, considerá estas optimizaciones:</p>
            <ul class="optimization-tips">
              <li>Revisá la complejidad temporal de tu algoritmo (O(n²) vs O(n log n))</li>
              <li>Evitá bucles anidados innecesarios</li>
              <li>Usá estructuras de datos más eficientes (arrays vs listas enlazadas)</li>
              <li>En C++: <code>ios_base::sync_with_stdio(false); cin.tie(NULL);</code></li>
              <li>En Java: usá <code>BufferedReader</code> en lugar de <code>Scanner</code></li>
              <li>En Python: usá la plantilla de Codeforces para entrada optimizada</li>
            </ul>
            
            <div class="code-example">
              <h4>Optimización de E/O en C++</h4>
              <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    // tu código aquí
    return 0;
}</code></pre>
            </div>

            <div class="code-example">
              <h4>Plantilla Python para Entrada Rápida (Codeforces)</h4>
              <pre><code>import sys
input = sys.stdin.readline

# Funciones de entrada optimizadas
def inp():
    return int(input())

def inlt():
    return list(map(int, input().split()))

def insr():
    return input().strip()

def invr():
    return map(int, input().split())

# Ejemplo de uso
n = inp()
arr = inlt()
# procesar datos...</code></pre>
            </div>
          </div>
        </li>

        <li class="faq-item">
          <h3 class="faq-question">¿Cómo debuggear mi código?</h3>
          <div class="faq-answer">
            <p>Técnicas útiles para encontrar errores:</p>
            <ul class="debug-tips">
              <li><strong>Casos de prueba pequeños:</strong> Probá tu código con entradas simples manualmente</li>
              <li><strong>Casos extremos:</strong> Probá con valores mínimos y máximos</li>
              <li><strong>Imprimir variables:</strong> Agregá prints temporales para ver valores intermedios</li>
              <li><strong>Revisar límites:</strong> Asegurate de que los arrays no se salgan de rango</li>
              <li><strong>Inicialización:</strong> Verificá que todas las variables estén inicializadas</li>
            </ul>
          </div>
        </li>

        <li class="faq-item">
          <h3 class="faq-question">¿Cómo reportar errores sobre este oj?</h3>
          <div class="faq-answer">
            <p>Si encontrás algún problema con el sistema, podés contactar al administrador en <a href="mailto:erwin.serrudo@sistemas.edu.bo">erwin.serrudo@sistemas.edu.bo</a></p>
            <p>Por favor incluí en tu reporte:</p>
            <ul>
              <li>ID de tu submission problemática</li>
              <li>Descripción detallada del problema</li>
              <li>Código que usaste (si es relevante)</li>
              <li>Comportamiento esperado vs observado</li>
              <li>Navegador y sistema operativo que estás usando</li>
            </ul>
          </div>
        </li>

      </ul>
    </div>
  </panel>
</template>

<script>
</script>

<style lang="less" scoped>
  .content {
    font-size: 16px;
    margin: 0 50px 40px 50px;
  }

  .faq-intro {
    margin-bottom: 30px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #007bff;
    
    p {
      margin: 0;
      color: #6c757d;
      font-size: 16px;
      line-height: 1.6;
    }
  }

  .faq-list {
    list-style: none;
    padding: 0;
  }

  .faq-item {
    margin-bottom: 30px;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .faq-question {
      background: #f8f9fa;
      color: #2c3e50;
      font-size: 18px;
      font-weight: 600;
      margin: 0;
      padding: 20px;
      border-bottom: 1px solid #e9ecef;
      cursor: pointer;

      &:before {
        content: "❓ ";
        margin-right: 8px;
        color: #007bff;
      }
    }

    .faq-answer {
      padding: 20px;
      
      p {
        margin-bottom: 15px;
        line-height: 1.6;
        color: #495057;
        font-size: 14px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      ul {
        margin: 15px 0;
        padding-left: 20px;
        
        &.optimization-tips, &.debug-tips {
          li {
            margin-bottom: 8px;
            line-height: 1.5;
            font-size: 14px;
          }
        }
      }
    }
  }

  .code-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .code-example {
    h4 {
      background: #007bff;
      color: white;
      margin: 0;
      padding: 8px 15px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 6px 6px 0 0;
    }

    pre {
      margin: 0;
      background: #f8f9fa;
      border: 1px solid #e9ecef;
      border-radius: 0 0 6px 6px;
      padding: 15px;
      overflow-x: auto;
      font-size: 13px;
      line-height: 1.4;

      code {
        background: none;
        color: #2c3e50;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      }
    }
  }

  .status-explanations {
    display: grid;
    gap: 10px;
    margin: 15px 0;
  }

  .status-item {
    padding: 12px 15px;
    border-radius: 6px;
    font-size: 14px;
    line-height: 1.5;

    &.accepted {
      background: #d4edda;
      border-left: 4px solid #28a745;
      color: #155724;
    }

    &.wrong-answer {
      background: #f8d7da;
      border-left: 4px solid #dc3545;
      color: #721c24;
    }

    &.time-limit, &.memory-limit {
      background: #fff3cd;
      border-left: 4px solid #ffc107;
      color: #856404;
    }

    &.runtime-error, &.compile-error {
      background: #f5c6cb;
      border-left: 4px solid #dc3545;
      color: #721c24;
    }

    &.pending {
      background: #d1ecf1;
      border-left: 4px solid #17a2b8;
      color: #0c5460;
    }
  }

  pre {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 6px;
    padding: 12px;
    overflow-x: auto;
    font-size: 13px;
    margin: 10px 0;

    code {
      background: none;
      color: #2c3e50;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    }
  }

  code {
    background: #f8f9fa;
    color: #e83e8c;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 90%;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  }

  @media (max-width: 768px) {
    .content {
      margin: 0 20px 40px 20px;
    }

    .code-examples {
      grid-template-columns: 1fr;
    }

    .faq-item .faq-question {
      font-size: 16px;
      padding: 15px;
    }

    .faq-item .faq-answer {
      padding: 15px;
    }
  }
</style>