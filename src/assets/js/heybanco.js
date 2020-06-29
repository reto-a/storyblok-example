      $(document).ready(function () {
      	sendDataGoogleAnalytics("Carga de Pagina");
      	$('#fullpage').fullpage({
      		anchors: ['inicio', 'siniralbanco', 'video', 'sintoken', 'video-2', 'descarga', 'footer'],
      		verticalCentered: true,
      		parallax: true,
      		autoScrolling: false,
      		fitToSection: false,
      		scrollBar: true,
      		responsiveWidth: 765,
      		responsiveHeight: 600,
      		afterResponsive: function (isResponsive) {

      		}

      	});
      });

      function sendDataGoogleAnalytics(evento) {
      	console.log(evento);
      	ga('send', 'event', {
      		'eventCategory': 'Carga de Landing',
      		'eventAction': 'load',
      		'eventLabel': 'Hey You',
      		'eventValue': '1'
      	});
      }

      function sendDataGoogleAnalytics(evento) {
      	console.log(evento);
      	ga('send', 'event', {
      		'eventCategory': 'Boton GooglePlay Mobile',
      		'eventAction': 'click',
      		'eventLabel': 'Descargar Hey',
      		'eventValue': '2'
      	});
      }

      function sendDataGoogleAnalytics(evento) {
      	console.log(evento);
      	ga('send', 'event', {
      		'eventCategory': 'Boton GooglePlay Desktop',
      		'eventAction': 'click',
      		'eventLabel': 'Descargar Hey',
      		'eventValue': '1'
      	});
      }

      function sendDataGoogleAnalytics(evento) {
      	console.log(evento);
      	ga('send', 'event', {
      		'eventCategory': 'Boton AppStore Desktop',
      		'eventAction': 'click',
      		'eventLabel': 'Descargar Hey',
      		'eventValue': '1'
      	});
      }

      function sendDataGoogleAnalytics(evento) {
      	console.log(evento);
      	ga('send', 'event', {
      		'eventCategory': 'Boton AppStore Mobile',
      		'eventAction': 'click',
      		'eventLabel': 'Descargar Hey',
      		'eventValue': '2'
      	});
      }
