const descendentes = {
  1: {
    nome: "Gilvan - Filho 1",
    netos: ["Ravani", "Jean", "Alan", "Enzo"],
    bisnetos: {
      "Ravani": ["Lara Isabelle"],
      "Jean": ["Guilherme"],
      "Alan": ["Henrique"]
    }
  },
  2: {
    nome: "Gilmar (in memoriam) - Filho 2",
    netos: ["Yasmim", "Leonardo"],
    bisnetos: {
      
    }
  },
  3: {
    nome: "Elizete - Filha 3",
    netos: ["Milton", "Eliaquin", "Elias"],
    bisnetos: {
      
    }
  },
  4: {
    nome: "Gabriel - Filho 4",
    netos: ["Gabriela", "Daniel", "Gabriel Jr", "Rodrigo", "Rafael"],
    bisnetos: {
      "Gabriela": ["Mariana", "Maria Eduarda", "Matheus"],
      "Daniel": ["Philipi"],
      "Gabriel Jr": ["Lorena", "Leonardo"],
      "Rafael": ["Matthews"]
      
    }
  },
  5: {
    nome: "Edilene - Filha 5",
    netos: ["Liziane", "Lisandro", "Lizandra", "Lidiane", "Cleisiane", "Cibelly"],
    bisnetos: {
      "Liziane": ["Natali (João Guilherme)", "Natan (Maitê)", "Lucas", "Sofia"],
      "Lisandro": ["Lyanndra", "Fernanda"],
      "Lizandra": ["Beatriz", "Miguel"],
      "Lidiane": ["Julia", "Noemi"],
      "Cleisiane": ["Cristal"]
      
    }
  },
  6: {
    nome: "Etevaldo - Filho 6",
    netos: ["Eric", "Matheus", "Marcelo", "Mariana", "Breno"],
    bisnetos: {
      
    }
  },
  7: {
    nome: "Edson - Filho 7",
    netos: ["Edna", "Renata", "Raquel"],
    bisnetos: {
      "Edna": ["Helena"],
      "Raquel": ["Rayssa"]
    }
  },
  8: {
    nome: "Edileusa - Filha 8",
    netos: ["Gideão", "Rebeca"],
    bisnetos: {
        "Gideão": ["Nicole", "Isabelly"]
    }
  },
  9: {
    nome: "Evaldo - Filho 9",
    netos: ["Isac", "Isaias", "Evaldo Jr"],
    bisnetos: {
      "Isac": ["Mirela", "Manuela"],
      "Isaias": ["Rafael"]
    }
  },
  10: {
    nome: "Josemary - Filho 10",
    netos: ["Jean Carlos", "Davi", "Ágatha"],
    bisnetos: {

    }
  }
};

function mostrarPopup(id) {
  const dados = descendentes[id];
  if (!dados) return;

  let html = `<h2>${dados.nome}</h2>`;
  if (dados.netos.length === 0) {
    html += `<p>Sem descendentes registrados.</p>`;
  } else {
    html += `<ul>`;
    dados.netos.forEach(neto => {
      html += `<li><strong>${neto}</strong>`;
      const bisnetos = dados.bisnetos[neto] || [];
      if (bisnetos.length > 0) {
        html += `<ul>`;
        bisnetos.forEach(b => html += `<li>${b}</li>`);
        html += `</ul>`;
      }
      html += `</li>`;
    });
    html += `</ul>`;
  }

  document.getElementById("conteudoPopup").innerHTML = html;
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}
