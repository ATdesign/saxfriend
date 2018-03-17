// SVG fingering chart
var SF_ALTO_SAX_CHART_K = 2.0784;
var SF_ALTO_SAX_CHART_W = 250; // Default width. To get height, use H=K*W
var SF_ALTO_SAX_CHART = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg width=\"{{{WIDTH}}}\" height=\"{{{HEIGHT}}}\""
        + "version=\"1.1\" viewBox=\"0 0 66.885 139.01\" xmlns=\"http://www.w3.org/2000/svg\"> <g "
        + "transform=\"translate(-72.667 -68.735)\" fill=\"none\" stroke=\"#000\">  <g>   <g "
        + "stroke-width=\".52917\">    <path class=\"sf-sax-left sf-sax-key sf-sax-l1\" d=\"m105.41 "
        + "92.326a5.6696 5.6696 0 0 1-5.6696 5.6696 5.6696 5.6696 0 0 1-5.6696-5.6696 5.6696 5.6696 0 0 1 "
        + "5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696 5.6696z\"/>    <path class=\"sf-sax-left sf-sax-key "
        + "sf-sax-l2\" d=\"m105.41 108.44a5.6696 5.6696 0 0 1-5.6696 5.6696 5.6696 5.6696 0 0 "
        + "1-5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696 5.6696z\"/>    "
        + "<path class=\"sf-sax-left sf-sax-key sf-sax-l3\" d=\"m105.41 124.26a5.6696 5.6696 0 0 1-5.6696 "
        + "5.6696 5.6696 5.6696 0 0 1-5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696-5.6696 5.6696 5.6696 0 0 1 "
        + "5.6696 5.6696z\"/>    <path class=\"sf-sax-left sf-sax-key sf-sax-l6\" d=\"m112.16 "
        + "100.26a3.5908 3.5908 0 0 1-3.5908 3.5908 3.5908 3.5908 0 0 1-3.5908-3.5908 3.5908 3.5908 0 0 1 "
        + "3.5908-3.5908 3.5908 3.5908 0 0 1 3.5908 3.5908z\"/>    <path class=\"sf-sax-left sf-sax-key "
        + "sf-sax-l4\" transform=\"rotate(54.702)\" d=\"m125.73-35.195a2.8348 6.3783 0 0 1-2.8348 6.3783 "
        + "2.8348 6.3783 0 0 1-2.8348-6.3783 2.8348 6.3783 0 0 1 2.8348-6.3783 2.8348 6.3783 0 0 1 2.8348 "
        + "6.3783z\"/>   </g>   <g stroke-width=\".52917\">    <path class=\"sf-sax-left sf-sax-key "
        + "sf-sax-l8\" transform=\"matrix(.97809 -.20817 .21049 .9776 0 0)\" d=\"m103.57 108.94a3.2549 "
        + "7.2924 0 0 1-3.2549 7.2924 3.2549 7.2924 0 0 1-3.2549-7.2924 3.2549 7.2924 0 0 1 3.2549-7.2924 "
        + "3.2549 7.2924 0 0 1 3.2549 7.2924z\"/>    <path class=\"sf-sax-left sf-sax-key sf-sax-l9\" "
        + "transform=\"matrix(.98114 -.19329 .19563 .98068 0 0)\" d=\"m111.44 117.73a3.2549 7.2924 0 0 "
        + "1-3.2549 7.2924 3.2549 7.2924 0 0 1-3.2549-7.2924 3.2549 7.2924 0 0 1 3.2549-7.2924 3.2549 "
        + "7.2924 0 0 1 3.2549 7.2924z\"/>    <path class=\"sf-sax-left sf-sax-key sf-sax-l7\" "
        + "transform=\"matrix(.97531 -.22082 .22316 .97478 0 0)\" d=\"m96.344 121.28a3.3463 7.497 0 0 "
        + "1-3.3463 7.497 3.3463 7.497 0 0 1-3.3463-7.497 3.3463 7.497 0 0 1 3.3463-7.497 3.3463 7.497 0 "
        + "0 1 3.3463 7.497z\"/>   </g>   <path d=\"m94.541 135.98h10.158\" stroke-width=\".52917\"/>  "
        + "</g>  <path class=\"sf-sax-left sf-sax-key sf-sax-l5\" d=\"m82.129 84.715c0.39255-0.21298 "
        + "7.262 4.9651 8.0652 9.1229 0.43192 1.9536 0.58911 3.8757-0.86226 "
        + "5.2917-0.78451-0.05989-0.52402-2.6395-2.7403-3.9688-0.99251-0.57096-2.1497-0.69689-2.823-0.94494"
        + "-0.63656-1.2127-2.0164-7.4229-2.0586-9.1483-0.0074-0.3042 0.41903-0.35251 0.41903-0.35251z\" "
        + "stroke-width=\".52917\"/>  <g>   <g stroke-width=\".52917\">    <path class=\"sf-sax-right "
        + "sf-sax-key sf-sax-r6\" d=\"m81.451 121.2h1.9991c1.0556 0 1.9054 0.8498 1.9054 1.9054v5.6094c0 "
        + "1.0556-0.8498 1.9054-1.9054 1.9054h-1.9991c-1.0556 "
        + "0-1.9054-0.8498-1.9054-1.9054v-5.6094c0-1.0556 0.8498-1.9054 1.9054-1.9054z\"/>    <path "
        + "class=\"sf-sax-right sf-sax-key sf-sax-r7\" d=\"m81.451 131.89h1.9991c1.0556 0 1.9054 0.8498 "
        + "1.9054 1.9054v5.6094c0 1.0556-0.8498 1.9054-1.9054 1.9054h-1.9991c-1.0556 "
        + "0-1.9054-0.84979-1.9054-1.9054v-5.6094c0-1.0556 0.8498-1.9054 1.9054-1.9054z\"/>    <path "
        + "class=\"sf-sax-right sf-sax-key sf-sax-r8\" d=\"m81.451 142.48h1.9991c1.0556 0 1.9054 0.8498 "
        + "1.9054 1.9054v5.6094c0 1.0556-0.8498 1.9054-1.9054 1.9054h-1.9991c-1.0556 "
        + "0-1.9054-0.8498-1.9054-1.9054v-5.6094c0-1.0556 0.8498-1.9054 1.9054-1.9054z\"/>    <path "
        + "class=\"sf-sax-right sf-sax-key sf-sax-r1\" d=\"m105.41 147.33a5.6696 5.6696 0 0 1-5.6696 "
        + "5.6696 5.6696 5.6696 0 0 1-5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696-5.6696 5.6696 5.6696 0 0 1 "
        + "5.6696 5.6696z\"/>    <path class=\"sf-sax-right sf-sax-key sf-sax-r2\" d=\"m105.41 "
        + "163.81a5.6696 5.6696 0 0 1-5.6696 5.6696 5.6696 5.6696 0 0 1-5.6696-5.6696 5.6696 5.6696 0 0 1 "
        + "5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696 5.6696z\"/>    <path class=\"sf-sax-right sf-sax-key "
        + "sf-sax-r3\" d=\"m105.41 179.45a5.6696 5.6696 0 0 1-5.6696 5.6696 5.6696 5.6696 0 0 "
        + "1-5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696 5.6696z\"/>   "
        + "</g>   <path class=\"sf-sax-right sf-sax-key sf-sax-r4\" transform=\"scale(.26458)\" "
        + "d=\"m376.96 709.66a25.179 21.429 0 0 0-25.18 21.43 25.179 21.429 0 0 0 0.0351 "
        + "0.83593h50.273a25.179 21.429 0 0 0 0.0488-0.83593 25.179 21.429 0 0 0-25.178-21.43z\" "
        + "stroke-width=\"2\"/>   <path class=\"sf-sax-right sf-sax-key sf-sax-r5\" d=\"m99.738 "
        + "200.87a6.6618 5.6696 0 0 0 6.6621-5.6699 6.6618 5.6696 0 0 0-9e-3 -0.22118h-13.302a6.6618 "
        + "5.6696 0 0 0-0.0129 0.22118 6.6618 5.6696 0 0 0 6.6616 5.6699z\" stroke-width=\".52917\"/>   "
        + "<g stroke-width=\"2\">    <path class=\"sf-sax-right sf-sax-key sf-sax-r9\" "
        + "transform=\"scale(.26458)\" d=\"m336 571.73c-1.6089-1e-5 -2.9043 1.2954-2.9043 2.9043 0 0 "
        + "0.17858 14.265-0.22321 17.725-0.0446 1.1607-6.2534 16.496-6.2534 16.496-0.58799 1.4976-0.23581 "
        + "4.0615 1.2618 4.6495l11.754 4.6133c1.4976 0.588 4.0922-0.93759 4.6802-2.4352 9.5109-15.278 "
        + "7.9664-25.461 7.2162-41.048-0.0717-1.6073-1.2954-2.9043-2.9043-2.9043z\"/>    <path "
        + "class=\"sf-sax-right sf-sax-key sf-sax-r10\" transform=\"scale(.26458)\" d=\"m329.87 "
        + "626.03c-1.5688 0-2.832 1.2632-2.832 2.832v39.461c0 1.5688 1.2632 2.832 2.832 "
        + "2.832h11.256c1.5688 0 3.4996-4.2074 3.8594-5.7344 2.0889-6.8166 1.5335-7.9662 "
        + "6.6113-11.25v-11.156c-5.0778-3.2838-4.5224-4.4334-6.6113-11.25-0.3598-1.527-2.2906-5.7344-3.8594"
        + "-5.7344z\"/>    <path class=\"sf-sax-left sf-sax-key sf-sax-l10\" transform=\"scale(.26458)\" "
        + "d=\"m431.34 472.76c-1.3862 8e-3 -2.852 0.0296-4.2969 0.0723-4.9341 0.14562-9.4252 "
        + "0.35998-11.814 3.1094-1.8845 2.3482-2.1687 5.9027-1.0078 8.0938 5.6806 3.8345 16.682 7.7383 "
        + "24.719 7.5566 8.0371 0.18164 19.038-3.7222 24.719-7.5566 1.1609-2.191 "
        + "0.87669-5.7456-1.0078-8.0938-2.3892-2.7495-6.8804-2.9639-11.814-3.1094-5.7796-0.17061-11.896 "
        + "0-11.896 0s-3.441-0.0963-7.5996-0.0723z\"/>   </g>   <path class=\"sf-sax-left sf-sax-key "
        + "sf-sax-l11\" d=\"m108.07 134.5c-0.15991-1.1493-0.25211-2.4176 0.23719-3.499 0.65487-1.5372 "
        + "1.9419-0.80241 2.6754-0.57767 0 0 3.1406 1.0266 4.1105 1.7897 0.33296 0.28813 0.54315 "
        + "3.1178-0.58488 4.0785-1.1773 0.73709-3.3479 0.47102-4.6619 "
        + "0.49762-1.3109-0.13604-1.6712-1.1227-1.7763-2.2892z\" stroke-width=\".52917\"/>   <path "
        + "class=\"sf-sax-left sf-sax-key sf-sax-l12\" d=\"m124.15 134.6c0.15991-1.1493 "
        + "0.25211-2.4176-0.23719-3.499-0.65487-1.5372-1.9419-0.80241-2.6754-0.57767 0 0-3.1406 "
        + "1.0266-4.1105 1.7897-0.33296 0.28813-0.54315 3.1178 0.58488 4.0785 1.1773 0.73709 3.3479 "
        + "0.47102 4.6619 0.49762 1.3109-0.13604 1.6712-1.1227 1.7763-2.2892z\" "
        + "stroke-width=\".52917\"/>   <path class=\"sf-sax-left sf-sax-key sf-sax-l13\" "
        + "transform=\"scale(.26458)\" d=\"m431.34 522.39c-1.3862 8e-3 -2.852 0.0335-4.2969 0.0781-4.9341 "
        + "0.15874-10.31-0.55494-12.699 2.4434-1.8845 2.5606-2.0415 8.1414-0.12304 10.973 5.6806 4.1814 "
        + "16.682 7.2391 24.719 7.041 8.0371 0.19808 19.038-2.8596 24.719-7.041 1.9183-2.8312 "
        + "1.7615-8.412-0.12305-10.973-2.3892-2.9983-7.7651-2.2846-12.699-2.4434-1.4449-0.0442-2.9107-0.070"
        + "6-4.2969-0.0781-4.1586-0.0265-7.5996 0.0781-7.5996 0.0781s-3.441-0.10461-7.5996-0.0781z\" "
        + "stroke-width=\"2\"/>  </g> </g></svg>";

var SF_ALTO_SAX_C_PREV = '.sax-chart-prev';
var SF_ALTO_SAX_C_NOW = '.sax-chart-now';
var SF_ALTO_SAX_C_NEXT = '.sax-chart-next';

// Chord list item specific
var SF_NOTE_LIST_TEMPLATE = "<ul id=\"sf-note-list\" class=\"uk-grid-small uk-child-width-1-3 uk-child-width-1-4@s uk-text-center\" uk-sortable=\"handle: .uk-sortable-handle\" uk-grid></ul>";
var SF_NOTE_LIST_CONTROL_TEMPLATE = "<div class=\"sf-note-player-controls\"><span class=\"sf-note-play\">Play</span> @ <input class=\"sf-note-bpm\" type=\"text\" value=\"{{sf-note-bpm}}\"> bpm <span class=\"import-sf-note-list\">Import</span> <span class=\"export-sf-note-list\">Export</span></div>";
var SF_NOTE_LIST_ITEM_TEMPLATE = "<div class=\"uk-card uk-card-default uk-card-body\"><div class=\"sf-note-header\"><span class=\"uk-sortable-handle\" uk-icon=\"icon: table\"></span> <span class=\"sf-note-text\">{{sf-note-text}}</span> | <span class=\"sf-note-legato\">leg.</span><br /></div><div class=\"sf-note-option sf-note-length\"><span class=\"sf-note-option-label\">Duration:</span><span class=\"sf-note-controls sf-note-reduce-value\" uk-icon=\"icon: minus-circle;\"></span><input type=\"text\" class=\"sf-note-text-input\" value=\"{{sf-note-length}}\" /><span class=\"sf-note-controls sf-note-add-value\" uk-icon=\"icon: plus-circle;\"></span></div><div class=\"sf-note-option sf-note-actions\"><span class=\"sf-note-controls sf-note-duplicate\">duplicate</span> | <span class=\"sf-note-controls sf-note-delete\">delete</span></div></div>";
var SF_NOTE_LENGTHS = ["1/16", "1/12", "1/8", "1/6", "1/4", "1/3", "1/2", "1"];
var SF_NOTE_PLAYER_CLASS = 'chord-player';
var SF_NOTE_LIST_ID = "chord-list";
var SF_NOTE_LIST_ITEM_CLASS = "chord-list-element";

// Standard alto sax fingerings separate for left and right hand
var alto_sax_notes = {
    "A#0": {left: [1, 2, 3, 13], right: [1, 2, 3, 5]},
    "B0": {left: [1, 2, 3, 11], right: [1, 2, 3, 5]},
    "C1": {left: [1, 2, 3], right: [1, 2, 3, 5]},
    "C#1": {left: [1, 2, 3, 12], right: [1, 2, 3, 5]},
    "D1": {left: [1, 2, 3], right: [1, 2, 3]},
    "D#1": {left: [1, 2, 3], right: [1, 2, 3, 4]},
    "E1": {left: [1, 2, 3], right: [1, 2]},
    "F1": {left: [1, 2, 3], right: [1]},
    "F#1": {left: [1, 2, 3], right: [2]},
    "G1": {left: [1, 2, 3], right: []},
    "G#1": {left: [1, 2, 3, 10], right: []},
    "A1": {left: [1, 2], right: []},
    "A#1": {left: [1, 6], right: []},
    "B1": {left: [1], right: []},
    "C2": {left: [2], right: []},
    "C#2": {left: [], right: []},
    "D2": {left: [1, 2, 3, 5], right: [1, 2, 3]},
    "D#2": {left: [1, 2, 3, 5], right: [1, 2, 3, 4]},
    "E2": {left: [1, 2, 3, 5], right: [1, 2]},
    "F2": {left: [1, 2, 3, 5], right: [1]},
    "F#2": {left: [1, 2, 3, 5], right: [2]},
    "G2": {left: [1, 2, 3, 5], right: []},
    "G#2": {left: [1, 2, 3, 5, 10], right: []},
    "A2": {left: [1, 2, 5], right: []},
    "A#2": {left: [1, 5, 6], right: []},
    "B2": {left: [1, 5], right: []},
    "C3": {left: [2, 5], right: []},
    "C#3": {left: [5], right: []},
    "D3": {left: [5, 9], right: []},
    "D#3": {left: [5, 8, 9], right: []},
    "E3": {left: [2, 3, 4, 5], right: []},
    "F3": {left: [2, 4, 5], right: []},
    "F#3": {left: [1, 3, 5], right: [1]}
}

// Fetch note from semitone distance to B-1
function from_semitone_distance(dist){
    var sci_ind = Math.floor((dist-1)/12);
    var note_index = (dist+11) % 12;
    return note_array[note_index] + sci_ind;
}

function transpose_note(note, semi){
    
    // Get note data
    var semid = get_semitone_distance(note);
    
    // Move the note
    return from_semitone_distance(semid+semi);
    
}

// Insert fingering chart into container by container width
function insert_alto_sax_chart(c_class) {
    if (c_class[0] !== ".") {
        c_class = "." + c_class
    }
    
    var cont_width = parseFloat(d3.select(c_class).style("width"));
    var cont_height = SF_ALTO_SAX_CHART_K * cont_width;
    var my_chart = SF_ALTO_SAX_CHART
            .replace("{{{WIDTH}}}", Math.round(cont_width))
            .replace("{{{HEIGHT}}}", Math.round(cont_height));
    d3.select(c_class).html(my_chart);
}

// Draw fingering for specified cc (content CSS class)
function draw_alto_fingering(note, cc) {

    // Clear all notes and remove previous highlights
    d3.selectAll(cc + " .sf-sax-key").classed("sf-sax-active", false);
    
    // Fetch the fingering
    var fn = alto_sax_notes[note.toUpperCase()];
    
    for (var l = 0; l < fn["left"].length; l++) {
        d3.select(cc + " .sf-sax-l" + fn["left"][l])
                .classed("sf-sax-active", true);
    }

    for (var l = 0; l < fn["right"].length; l++) {
        d3.select(cc + " .sf-sax-r" + fn["right"][l])
                .classed("sf-sax-active", true);
    }
}

// Some additions to existing classes
// Draw particular note, e.g., "F#4" or clear it via display = false
comptoolsFretboard.prototype.updateExclusiveNote = function (note, display) {

        this.svg_fretboard.selectAll(".fretboard-marker-selected")
                .classed("fretboard-marker-selected", false);

        if (typeof display === 'undefined')
        {
            display = true;
        }

        this.svg_fretboard.selectAll(".note-" + note.replace("#", "s").
                toLowerCase()).classed("fretboard-marker-selected", display);

    };
    
comptoolsKeyboard.prototype.updateExclusiveNote = function (note, display) {

        this.svg_keyboard.selectAll(".keyboard-marker-selected")
                .classed("keyboard-marker-selected", false);

        if (typeof display === 'undefined')
        {
            display = true;
        }

        this.svg_keyboard.selectAll(".note-" + note.replace("#", "s").
                toLowerCase()).classed("keyboard-marker-selected", display);

    };


function AltoSaxChart() {

// Add the three visualization elements
    insert_alto_sax_chart(SF_ALTO_SAX_C_PREV);
    insert_alto_sax_chart(SF_ALTO_SAX_C_NOW);
    insert_alto_sax_chart(SF_ALTO_SAX_C_NEXT);
    // Show fingering for sax key
    this.draw_fingerings = function (notes) {

        // Check whether notes is array and convert to array if not.
        if (notes.constructor !== Array){
            notes = [notes];
        }

        if (notes.length > 3) {
            notes = notes.slice(0, 3);
        }

        if (notes.length === 2) {
            notes = notes.splice(0, 0, notes[2]);
        }

        if (notes.length === 1) {
            notes = [notes[0], notes[0], notes[0]];
        }
        var ftod = [SF_ALTO_SAX_C_PREV, SF_ALTO_SAX_C_NOW, SF_ALTO_SAX_C_NEXT];
        for (var k = 0; k < ftod.length; k++) {
            draw_alto_fingering(notes[k], ftod[k]);
        }
    };
}


// **********************************
// Chord player objects and functions
// **********************************

// The object
function comptoolsNotePlayerElement(root, chord, dur, leg)
{

    // Check argument list
    var my_dur = '1/2';
    if (dur !== undefined)
    {
        my_dur = dur;
    }
    
    var my_leg = false;
    if (leg !== undefined){
        my_leg = leg;
    }

    // Initialization 
    var self = this;

    // Check root and chord, use default (C maj) if unsupported
    var my_root = 'C';
    root = flats2sharps(root).toUpperCase().replace("H", "B"); // Make sure root is correct
    if (note_array.indexOf(root) !== -1){
        my_root = root;
    }else{
        console.log('Wrong note detected. Using default value.');
    }
    
    var my_chord = 'maj';
    chord = chord.toLowerCase();
    if (chord_structures.hasOwnProperty(chord)){
        my_chord = chord;
    }else{
        console.log('Wrong chord detected. Using default value.');
    }

    this.my_root = my_root;
    this.my_chord = my_chord;

    // Timeline correspondence
    this.timeline_id = null;

    // Indices for duration and octave: defaults to length of 1/2 and 3rd octave
    this.duration_index = CHORD_LENGTHS.indexOf(my_dur);
    if (this.duration_index === -1){
        my_dur = '1/2';
        this.duration_index = CHORD_LENGTHS.indexOf('1/2');
        console.log('Wrong duration detected. Using default value.');
    }
    
    this.octave_index = CHORD_OCTAVES.indexOf(my_oct);
    if (this.octave_index === -1){
        my_oct = 3;
        this.octave_index = CHORD_OCTAVES.indexOf(3);
        console.log('Wrong octave detected. Using default value.');
    }

    // Also methods to get actual values
    this.get_dur = function () {
        return CHORD_LENGTHS[this.duration_index];
    };

    this.get_oct = function () {
        return CHORD_OCTAVES[this.octave_index];
    };

    // Play this chord
    this.play = function () {
        play_chord(this.my_root, this.my_chord, this.get_oct(),
                get_duration_in_seconds(this.get_dur()));
    }

    // Whether to use legato with several same chords
    this.legato = my_leg;

    this.elem_id = 'chord-list-item-' + chord_list_counter++;

    // Replace the values
    var my_chord_elem = CHORD_LIST_ITEM_TEMPLATE.replace('{{chord-text}}', root + " " + chord);
    my_chord_elem = my_chord_elem.replace('{{chord-length}}', my_dur);
    my_chord_elem = my_chord_elem.replace('{{chord-octave}}', my_oct);

    // Add to DOM
    var chord_list_elem = d3.select("#" + CHORD_LIST_ID);
    this.list_elem = chord_list_elem.append('li')
            .attr('class', CHORD_LIST_ITEM_CLASS)
            .attr('id', this.elem_id)
            .html(my_chord_elem);

    // Set up legato
    d3.select("#" + this.elem_id + ' .chord-legato')
            .classed('selected', this.legato);

    // Assign actions

    // Legato
    d3.select("#" + this.elem_id + ' .chord-legato')
            .on('click', function () {
                self.legato = !self.legato;
                d3.select(this).classed('selected', self.legato);
                if (comptools_config.chord_player !== undefined) {
                    comptools_config.chord_player.update_callback();
                }
            }
            );

    // Chord selection
    d3.select("#" + this.elem_id + ' .chord-header .chord-text')
            .on('click', this.clickHandler());

    // Length and octave controls
    d3.select('#' + this.elem_id + ' .chord-length .chord-reduce-value')
            .on('click', function () {
                self.updateDuration(-1);
                if (comptools_config.chord_player !== undefined) {
                    comptools_config.chord_player.update_callback();
                }
            });

    d3.select('#' + this.elem_id + ' .chord-length .chord-add-value')
            .on('click', function () {
                self.updateDuration(1);
                if (comptools_config.chord_player !== undefined) {
                    comptools_config.chord_player.update_callback();
                }
            });


    // Delete and duplicate
    d3.select('#' + this.elem_id + ' .chord-actions .chord-delete')
            .on('click', function () {
                self.delete();
                if (comptools_config.chord_player !== undefined) {
                    comptools_config.chord_player.update_callback();
                }
            });

    d3.select('#' + this.elem_id + ' .chord-actions .chord-duplicate')
            .on('click', function () {
                // Get duration and octave by indices
                var dup_dur = CHORD_LENGTHS[self.duration_index];
                var dup_oct = CHORD_OCTAVES[self.octave_index];
                var my_chord = new comptoolsChordPlayerElement(self.my_root,
                        self.my_chord, dup_dur, dup_oct);
                chord_list.push(my_chord);
                if (comptools_config.instrument_glue !== undefined) {
                    my_chord.selection_callback =
                            comptools_config
                            .instrument_glue
                            .funHighlightChordListElementNotes;
                }
                if (comptools_config.chord_player !== undefined) {
                    comptools_config.chord_player.update_callback();
                }
            });

    // Update duration
    this.updateDuration = function (dir)
    {
        // Add to current index, check that it's within bounds
        this.duration_index += dir;

        this.duration_index =
                saturate_value(this.duration_index, 0, CHORD_LENGTHS.length - 1);

        // Set the appropriate value in the text box
        var my_dur = CHORD_LENGTHS[this.duration_index];
        d3.select('#' + this.elem_id + ' .chord-length .chord-text-input')
                .attr('value', my_dur);

    };

    // Delete method
    this.delete = function ()
    {
        // Check if this object is the selected one in player and remove it
        if (comptools_config.chord_player !== undefined &&
                this === comptools_config.chord_player.current_chord) {
            comptools_config.chord_player.current_chord = null;
        }

        this.list_elem.remove();
        chord_list.remove_obj_by_prop('elem_id', this.elem_id);

        if (comptools_config.chord_player !== undefined) {
            comptools_config.chord_player.update_callback();
        }

        return true;
    };

}

// Create the sax glue object
function InstrumentGlueSax() {
    // ... and push single note update functions here
    this.objArray = new Array();
    
    this.fingering_chart = null;

    var self = this;

    // Apply this callback function to all instruments' selection callback
    this.funCallback = function (note, action)
    {
        for (var k = 0; k < self.objArray.length; k++)
        {
            // Call all functions in array with the update information
            self.objArray[k].updateExclusiveNote(note, action);
        }
        
        // TODO: In the future, this will add the note to the timeline
        self.fingering_chart.draw_fingerings(note);
    };
}
;