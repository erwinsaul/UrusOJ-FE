 <template>
  <Panel shadow :padding="20">
    <div slot="title">
      🎓 Juez Virtual UrusOJ - Carrera de Ingeniería de Sistemas e Ingeniería Informática - Facultad Nacional de Ingeniería
    </div>
    
    <div class="judge-info-content">      
      <div class="info-section">
        <h4>Nuestro Juez Virtual Tiene:</h4>
        <ul>
          <li>Problemas específicos de los eventos organizados por la Carrera</li>
          <li>Ejercicios de Programación</li>
          <li>Competencias internas en relacion al calendario académico</li>
          <li>Interfaz en español y configuración local</li>
        </ul>
      </div>
      
      <div class="info-section">
        <h4>¿Cómo empezar?</h4>
        <ul>
          <li>Regístrate con tu email</li>
          <li>Explora problemas organizados por etiquetas y dificultad</li>
          <li>Envía soluciones en C++, Java, Python</li>
          <li>Participa en competencias programadas durante el semestre</li>
        </ul>
      </div>
    </div>
  </Panel>
</template>

<script>
export default {
  name: 'JudgeInfo'
}
</script>

<style scoped lang="less">
.judge-info-content {
  line-height: 1.6;
  color: #495057;
  
  .intro-text {
    font-size: 16px;
    margin-bottom: 25px;
    text-align: justify;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #007bff;
  }
  
  .info-section {
    margin-bottom: 25px;
    
    h4 {
      color: #343a40;
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 600;
      border-bottom: 2px solid #e9ecef;
      padding-bottom: 5px;
    }
    
    ul {
      margin: 0;
      padding-left: 20px;
      
      li {
        margin-bottom: 8px;
        font-size: 14px;
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  
  .highlight-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    font-size: 15px;
    margin-top: 20px;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
}

// Responsive para móviles
@media (max-width: 768px) {
  .judge-info-content {
    .intro-text {
      font-size: 14px;
      padding: 12px;
    }
    
    .info-section {
      h4 {
        font-size: 15px;
      }
      
      ul li {
        font-size: 13px;
      }
    }
    
    .highlight-box {
      font-size: 14px;
      padding: 12px;
    }
  }
}
</style>