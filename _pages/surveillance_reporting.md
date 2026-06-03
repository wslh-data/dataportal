---
title: Wisconsin Clinical Laboratory Surveillance Reporting
layout: dashboard
dashboard-id: 4
img: lab.png
thumbnail: lab.png
alt: Surveillance Data Reporting
---

## Submit Results via the New Portal
<br>
<div style="font-size:2rem;"> 
Each laboratory has been assigned a unique reporting URL. To obtain your URL:
<ol>
<li>Enter your <b>Lab ID*</b> in the designated field below.</li>
<li>Click on the custom reporting URL that appears.</li>
</ol>
<i>Please note</i>: Your URL will remain the same and can be saved or bookmarked for future use.
<br><br>
*Your <b>Lab ID</b> is the same username you use to log in to the Survey Alchemer reporting portal. It consists of a series of uppercase letters followed by numbers (e.g. LRN999). </div>
<br>
<div style="margin: 1.5rem 0;">
  <label for="labIdInput" style="display:block; font-weight:bold; margin-bottom:0.5rem; font-size:2rem">Lab ID</label>
  <div style="display:flex; gap:0.5rem; align-items:center;">
    <input type="text" id="labIdInput" placeholder=""
      style="padding:0.4rem 0.6rem; font-size:2rem; border:1px solid #ccc; border-radius:4px; width:400px;">
    <button id="labLookupBtn"
      style="padding:0.4rem 1rem; font-size:2rem; background:#c5050c; color:#fff; border:none; border-radius:4px; cursor:pointer;">
      Look Up
    </button>
  </div>
  <div id="labLookupResult" style="margin-top:4rem; font-size:2rem;"></div>
</div>

<script>
(function () {
  var labUrls = {};
  var dataReady = false;

  function parseCSV(text) {
    var lines = text.trim().split('\n');
    lines.slice(1).forEach(function (line) {
      var fields = [];
      var inQuote = false;
      var field = '';
      for (var i = 0; i < line.length; i++) {
        var c = line[i];
        if (c === '"') {
          inQuote = !inQuote;
        } else if (c === ',' && !inQuote) {
          fields.push(field.trim());
          field = '';
        } else {
          field += c;
        }
      }
      fields.push(field.trim());
      if (fields.length >= 3) {
        labUrls[fields[0]] = { name: fields[1], url: fields[2] };
      }
    });
    dataReady = true;
  }

  fetch('/data/lab_data')
    .then(function (r) { return r.text(); })
    .then(function (c) { return atob(c)})
    .then(parseCSV)
    .catch(function (e) { console.error('Failed to load lab data', e); });

  function doLookup() {
    var input = document.getElementById('labIdInput');
    var resultEl = document.getElementById('labLookupResult');
    var id = input.value.trim();

    resultEl.innerHTML = '';

    if (!id) {
      var warn = document.createElement('p');
      warn.style.color = '#856404';
      warn.textContent = 'Please enter a Lab ID.';
      resultEl.appendChild(warn);
      return;
    }

    if (!dataReady) {
      var loading = document.createElement('p');
      loading.textContent = 'Data is still loading, please try again.';
      resultEl.appendChild(loading);
      return;
    }

    var entry = labUrls[id];
    if (entry) {
      var label = document.createElement('div');
      label.appendChild(document.createTextNode(entry.name));
      label.appendChild(document.createElement('br'));
      label.appendChild(document.createTextNode('Here is your submission URL:'));
      label.style.marginBottom = '0.25rem';

      var link = document.createElement('a');
      link.href = entry.url;
      link.textContent = entry.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      resultEl.appendChild(label);
      resultEl.appendChild(link);
    } else {
      var msg = document.createElement('p');
      msg.style.color = '#c5050c';
      msg.textContent = 'No submission URL found for Lab ID: ' + id;
      resultEl.appendChild(msg);
    }
  }

  document.getElementById('labLookupBtn').addEventListener('click', doLookup);
  document.getElementById('labIdInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') doLookup();
  });
})();
</script>
