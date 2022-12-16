/*CEP*/

$(document).ready(function () {

    function limpa_formulário_cep() {
      $("#rua").val("");
      $("#bairro").val("");
      $("#cidade").val("");
      $("#uf").val("");
      $("#ibge").val("");
    }
  
    $("#inputCEP").focusout(function () {
      var cep = $(this).val().replace(/\D/g, '');
      if (cep != "") {
        var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
  
          $("#rua").val("...");
          $("#bairro").val("...");
          $("#cidade").val("...");
          $("#uf").val("...");
          $("#ibge").val("...");
  
          $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {
  
            if (!("erro" in dados)) {
              //Atualiza os campos com os valores da consulta.
              $("#inputAddress").val(dados.logradouro);
              $("#inputBairro").val(dados.bairro);
              $("#inputCity").val(dados.localidade);
              $("#inputEstado").val(dados.uf);
            } //end if.
            else {
              //CEP pesquisado não foi encontrado.
              limpa_formulário_cep();
              alert("CEP não encontrado.");
            }
          });
        } //end if.
        else {
          //cep é inválido.
          limpa_formulário_cep();
          alert("Formato de CEP inválido.");
        }
      } //end if.
      else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
      }
    });
  });
  
  document.getElementById("inputSenha").addEventListener("focusout", validarSenha);
  document.getElementById("confirmarSenha").addEventListener("focusout", validarSenha);
  // FUNÇÃO PARA O MENU FICAR ROXO AO SCROLLAR 
  
  
  
  $(document).ready(function () {

    function limpa_formulário_cep() {
      $("#rua").val("");
      $("#bairro").val("");
      $("#cidade").val("");
      $("#uf").val("");
      $("#ibge").val("");
    }
  
    $("#inputCEP").focusout(function () {
      var cep = $(this).val().replace(/\D/g, '');
      if (cep != "") {
        var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
  
          $("#rua").val("...");
          $("#bairro").val("...");
          $("#cidade").val("...");
          $("#uf").val("...");
          $("#ibge").val("...");
  
          $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {
  
            if (!("erro" in dados)) {
              //Atualiza os campos com os valores da consulta.
              $("#inputAddress").val(dados.logradouro);
              $("#inputBairro").val(dados.bairro);
              $("#inputCity").val(dados.localidade);
              $("#inputEstado").val(dados.uf);
            } //end if.
            else {
              //CEP pesquisado não foi encontrado.
              limpa_formulário_cep();
              alert("CEP não encontrado.");
            }
          });
        } //end if.
        else {
          //cep é inválido.
          limpa_formulário_cep();
          alert("Formato de CEP inválido.");
        }
      } //end if.
      else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
      }
    });
  });