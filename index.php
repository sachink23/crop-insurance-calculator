 <!DOCTYPE html>
<html lang="en">

<head>
    <title>Crop Insurance Calculator : Kekarjawalekar Technologies</title>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="/manifest.json" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117662376-2"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function(err) {
              // registration failed :(
              console.log('ServiceWorker registration failed: ', err);
            });
          });
        }
    </script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-117662376-2');
    </script>
    <!--Start of Tawk.to Script-->
    <script type="text/javascript">
        var Tawk_API = Tawk_API || {},
            Tawk_LoadStart = new Date();
        (function() {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/5d0610fe53d10a56bd7a4cfc/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    </script>
    <script>
	function notifSend() {
     var options = {
       body: 'Thanks For Visiting Crop Insurance Calculator Made by Kekarjawalekar Technologies',
       icon: 'https://old-cic.kportal.in/PikvimaCalculator/assets/img/144x144.png'
     };
     var X = new Notification('Crop Insurance Calculator', options);
   }

    </script>
		<script>

    let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

async function install() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    console.log(deferredPrompt)
    deferredPrompt.userChoice.then(function(choiceResult){

      if (choiceResult.outcome === 'accepted') {
      console.log('Your PWA has been installed');
    } else {
      console.log('User chose to not install your PWA');
    }

    deferredPrompt = null;

    });


  }
}

		</script>
    <!--End of Tawk.to Script-->

</head>

<body onload="Notification.requestPermission().then(function(status) { if(window.matchMedia('(display-mode: standalone)').matches) {document.getElementById('installBtn').style.display='none';} else { document.getElementById('installBtn').style.display=''; } console.log(status); if(status == 'granted') {notifSend()}});">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <center><a class="navbar-brand" href="#" style="text-align:center">Crop Insurance Calculator</a></center>
    </nav>
    <div class="container">
        <div class="row">

            <div class="col-12">
                <br/>
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title" style="text-align:center">Select District</h3>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <br/>
            </div>
            <div class="col-6">
                <a href="/PikvimaCalculator/">
                    <div class="card">
                        <div class="card-body" style="text-align:center">Parbhani</div>
                    </div>
                </a>
            </div>
            <div class="col-6">
                <a href="/PikvimaCalculator/Jalna/">
                    <div class="card">
                        <div class="card-body" style="text-align:center">Jalna</div>
                    </div>
                </a>
            </div>
            <div class="col-12">
                <br/>
            </div>
            <div class="col-6">
                <a href="/PikvimaCalculator/Aurangabad/">
                    <div class="card">
                        <div class="card-body" style="text-align:center">Aurangabad</div>
                    </div>
                </a>
            </div>
            <div class="col-12">
                <br/>
            </div>
				<div class="col-6" id="installBtn" style="display:none">
						<button class="btn btn-primary"  onclick="install(); document.getElementById('installBtn').style.display='none'">Install App</button>
				</div>
        <div class="col-6">
						<button class="btn btn-primary" id="installBtn" style="" onclick="window.location.href='/affiliate/'">Check Recomended Products For CSC Vles</button>
				</div>
			  <div class="col-12">
                <br/>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">What is crop insurance Calculator ?</h4>
                        <p class="card-text">Crop insurance calculator helps VLEs, farmers to calculate their crop insurance premium, insured amount for specific crop in their district. Currently we have added support for Parbhani, Jalna and Aurangabad districts and soon we will be adding
                            to more districts. We request you to please leave your helpful review / suggestion for this webapp. If you want your district in the calculator please email us on given address - </p>
                        <a href="mailto:sachin@kekarjawalekar.com" class="card-link">sachin@kekarjawalekar.com</a>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <br/>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title" style="text-align:center">Testimonials</h4>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <br/>
            </div>
            <div class="col-12 lg-6">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">&ldquo;पीकविमा कॅलकुलेटर २०१८ मुळे माझे काम खूप सोपे झाले, रकमेचे कॅलकुलेशन करण्यास कमीत कमी वेळ लागल्यामुळे ग्राहकांना जास्त वेळ थांबवून घेण्याची गरज पडली नाही.&rdquo;</p>
                        <small><strong>नृसिंह धुळगुंडे - संचालक, अनुजा महा ई सेवा केंद्र, गंगाखेड</strong></small>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <br/>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">पीकविमा कॅलकुलेटर म्हणजे वेळ वाचवण्याचे गणना यंत्र, कमीत कमी वेळात जास्त काम करण्याची ताकत देणारे साधन.&rdquo;</p>
                        <small><strong>विठ्ठल तरासे - संचालक, आपले सरकार सेवा केंद्र, आसनगाव</strong></small>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <br/>
                <div id="wpac-review"></div>
                <script type="text/javascript">
                    wpac_init = window.wpac_init || [];
                    wpac_init.push({
                        widget: 'Review',
                        id: 19162
                    });
                    (function() {
                        if ('WIDGETPACK_LOADED' in window) return;
                        WIDGETPACK_LOADED = true;
                        var mc = document.createElement('script');
                        mc.type = 'text/javascript';
                        mc.async = true;
                        mc.src = 'https://embed.widgetpack.com/widget.js';
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(mc, s.nextSibling);
                    })();
                </script>
            </div>
            <div class="col-12">
                <br/>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">Please go through our <a href="PikvimaCalculator/tnc.html"> terms and conditions </a>before using this webapp</p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <br/>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <center><img src="PikvimaCalculator/assets/img/logo-rect.png"></a>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <br/>
            </div>
        </div>
    </div>
    <nav class="navbar bottom navbar-light bg-faded">
      <small >&copy; 2018-2019 | Kekarjawalekar Technologies</small>
    </nav>
</body>

</html>
