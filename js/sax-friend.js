// Set up Vexflow
if (typeof Vex.Flow !== "undefined") {
    VF = Vex.Flow;
} else
{
    VF = null;
}

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

var SF_ALTO_NOTE_LOW = 47;
var SF_ALTO_NOTE_HIGH = 79;

// Chord list item specific
var SF_NOTE_LIST_TEMPLATE = "<ul id=\"sf-note-list\" class=\"uk-grid-small uk-child-width-1-3 uk-child-width-1-4@s uk-text-center\" uk-sortable=\"handle: .uk-sortable-handle\" uk-grid></ul>";
var SF_NOTE_LIST_CONTROL_TEMPLATE = "<div class=\"sf-note-player-controls\"><span class=\"sf-note-play\">Play</span> @ <input class=\"sf-note-bpm\" type=\"text\" value=\"{{sf-note-bpm}}\"> bpm <span class=\"import-sf-note-list\">Import</span> <span class=\"export-sf-note-list\">Export</span></div>";
var SF_NOTE_LIST_ITEM_TEMPLATE = "<div class=\"uk-card uk-card-default uk-card-body\"><div class=\"sf-note-header\"><span class=\"uk-sortable-handle\" uk-icon=\"icon: table\"></span> <span class=\"sf-note-text\">(alto sax) {{sf-note-text}}</span> | <span class=\"sf-note-legato\">leg.</span><br /></div><div class=\"sf-note-canvas\"></div><div class=\"sf-note-option sf-note-length\"><span class=\"sf-note-option-label\">Length:</span><span class=\"sf-note-controls sf-note-reduce-value\" uk-icon=\"icon: minus-circle;\"></span><input type=\"text\" class=\"sf-note-text-input\" value=\"{{sf-note-length}}\" /><span class=\"sf-note-controls sf-note-add-value\" uk-icon=\"icon: plus-circle;\"></span></div><div class=\"sf-note-option sf-note-actions\"><span class=\"sf-note-controls sf-note-duplicate\">duplicate</span> | <span class=\"sf-note-controls sf-note-delete\">delete</span></div></div>";
var SF_NOTE_LENGTHS = ["1/32", "1/24", "1/16", "1/12", "1/8", "1/6", "1/4", "1/3", "1/2", "2/3", "1"];
var SF_NOTE_PLAYER_CLASS = 'sf-note-player';
var SF_NOTE_LIST_ID = "sf-note-list";
var SF_NOTE_LIST_ITEM_CLASS = "sf-note-list-element";

// Standard alto sax fingerings separate for left and right hand
var alto_sax_notes = {
    "A#3": {left: [1, 2, 3, 13], right: [1, 2, 3, 5]},
    "B3": {left: [1, 2, 3, 11], right: [1, 2, 3, 5]},
    "C4": {left: [1, 2, 3], right: [1, 2, 3, 5]},
    "C#4": {left: [1, 2, 3, 12], right: [1, 2, 3, 5]},
    "D4": {left: [1, 2, 3], right: [1, 2, 3]},
    "D#4": {left: [1, 2, 3], right: [1, 2, 3, 4]},
    "E4": {left: [1, 2, 3], right: [1, 2]},
    "F4": {left: [1, 2, 3], right: [1]},
    "F#4": {left: [1, 2, 3], right: [2]},
    "G4": {left: [1, 2, 3], right: []},
    "G#4": {left: [1, 2, 3, 10], right: []},
    "A4": {left: [1, 2], right: []},
    "A#4": {left: [1, 6], right: []},
    "B4": {left: [1], right: []},
    "C5": {left: [2], right: []},
    "C#5": {left: [], right: []},
    "D5": {left: [1, 2, 3, 5], right: [1, 2, 3]},
    "D#5": {left: [1, 2, 3, 5], right: [1, 2, 3, 4]},
    "E5": {left: [1, 2, 3, 5], right: [1, 2]},
    "F5": {left: [1, 2, 3, 5], right: [1]},
    "F#5": {left: [1, 2, 3, 5], right: [2]},
    "G5": {left: [1, 2, 3, 5], right: []},
    "G#5": {left: [1, 2, 3, 5, 10], right: []},
    "A5": {left: [1, 2, 5], right: []},
    "A#5": {left: [1, 5, 6], right: []},
    "B5": {left: [1, 5], right: []},
    "C6": {left: [2, 5], right: []},
    "C#6": {left: [5], right: []},
    "D6": {left: [5, 9], right: []},
    "D#6": {left: [5, 8, 9], right: []},
    "E6": {left: [2, 3, 4, 5], right: []},
    "F6": {left: [2, 4, 5], right: []},
    "F#6": {left: [1, 3, 5], right: [1]}
}

// Global counter and chord placeholder
var sf_note_list_counter = 0;
var sf_note_list = [];

// Play events
var sf_note_play_events = [];

// Fetch note from semitone distance to B-1
function from_semitone_distance(dist) {
    var sci_ind = Math.floor((dist - 1) / 12);
    var note_index = (dist + 11) % 12;
    return note_array[note_index] + sci_ind;
}

function transpose_note(note, semi) {

    // Get note data
    var semid = get_semitone_distance(note);

    // Move the note
    return from_semitone_distance(semid + semi);

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

    if (typeof fn !== "undefined") {
        d3.selectAll(cc + " .sf-sax-key").classed("sf-sax-out-of-range", false);
        for (var l = 0; l < fn["left"].length; l++) {
            d3.select(cc + " .sf-sax-l" + fn["left"][l])
                    .classed("sf-sax-active", true);
        }

        for (var l = 0; l < fn["right"].length; l++) {
            d3.select(cc + " .sf-sax-r" + fn["right"][l])
                    .classed("sf-sax-active", true);
        }
    } else {
        // Not in range or note not found
        d3.selectAll(cc + " .sf-sax-key").classed("sf-sax-out-of-range", true);
    }
}


function add_sf_note_to_player(note) {
    var my_note = new comptoolsSfNotePlayerElement(note);
    sf_note_list.push(my_note);

    // Because the relationship is many to one, we'll have to use
    // a config variable here---reference to instrument glue.
    // Therefore, it must be assigned beforehand.
    if (typeof comptools_config.instrument_glue !== "undefined") {
        my_note.selection_callback =
                comptools_config
                .instrument_glue
                .funHighlightSfNoteListElementNotes;
    }

    if (typeof comptools_config.sf_note_player !== "undefined") {
        comptools_config.sf_note_player.update_callback();
    }

    // Correct pitch for playback
    play_sf_note(transpose_note(note, -9), 0.5);
}

// Audio context sound player
function play_sf_note(note, len) {
    // Check if there is audio context and that sound is enabled
    if (typeof comptools_sound_player !== "undefined" && comptools_config.play_sound)
    {
        comptools_sound_player.triggerAttackRelease(note, len);
    }

    // If there is MIDI support and MIDI is enabled, then play midi
    if (typeof comptools_midi_player !== "undefined" &&
            comptools_midi_player.ready && comptools_config.play_midi) {
        comptools_midi_player.sendOnOffMessage(note, 1000 * len);
    }

}
;

// Audio context sound player
function player_play_sf_note(note, len) {

    // Play the sound
    if (typeof comptools_sound_player !== "undefined" && comptools_config.play_sound)
    {
        comptools_sound_player.triggerAttackRelease(note, len);
    }

    if (typeof comptools_midi_player !== "undefined" &&
            comptools_midi_player.ready && comptools_config.play_midi) {
        comptools_midi_player.CyclicSendOnMessage(note);
    }
}
;

// Parse the sf note player
function parse_sf_note_player() {

    // Get the current order
    var play_order_ids = [];
    d3.selectAll('#' + SF_NOTE_LIST_ID + ' .' + SF_NOTE_LIST_ITEM_CLASS).
            each(function () {
                play_order_ids.push(d3.select(this).attr('id'));
            });

    // Go through all id's and find a selected chord,
    // if any; defaults to first chord
    var my_elem, sf_note_selected = -1;
    for (var k = 0; k < play_order_ids.length; k++) {
        if (d3.select('#' + SF_NOTE_LIST_ID + ' #'
                + play_order_ids[k] + ' div.uk-card')
                .classed('sf-note-selected')) {
            chord_selected = k;
            break;
        }
    }

    // NB! Note that notes marked as "legato" will NOT play if they are
    // selected and represent an actual continuation of the previous
    // chord(s). Thus, the user must always select the first note in the
    // progression to hear the full duration. (TODO: Maybe fix this?)

    // Create the event list
    var current_sf_note, unchanged_sf_note;
    var unchanged_sf_note_event_ind = 0;  // This is used to update lengths

    // Start position
    var start_position = 0;

    // Total duration
    var total_dur = 0;

    var sf_note_play_events = [];  // Local scope
    for (var k = 0; k < play_order_ids.length; k++) {

        current_sf_note = sf_note_list.get_obj_by_prop('elem_id',
                play_order_ids[k]);

        // Store the first chord to unchanged_chord so we can update
        // it with additional length if legatos are used in sequence
        if (k === 0) {
            unchanged_sf_note = current_sf_note;
            unchanged_sf_note_event_ind = 0;
        }

        // Check whether this chord is the same as unchanged_chord and there
        // is a legato mark present (for all chords after the first one)
        var do_legato = false;
        if (k > 0 && current_sf_note.my_note === unchanged_sf_note.my_note &&
                current_sf_note.legato) {
            do_legato = true;
        }

        // Get current duration
        var now_dur = get_duration_in_seconds(current_sf_note.get_dur());

        // Figure out start position by selected note
        if (sf_note_selected !== -1 && k < sf_note_selected) {
            start_position += now_dur;
        }

        // Create the event
        var my_event = {
            "object": current_sf_note,
            "highlight_id": current_sf_note.elem_id,
            "note": current_sf_note.my_note,
            "duration": now_dur,
            "interval": now_dur,
            "legato": do_legato
        };

        // Get sum of all durations
        total_dur += now_dur;

        sf_note_play_events.push(my_event);

        // Legato?
        if (do_legato) {
            sf_note_play_events[unchanged_sf_note_event_ind].duration +=
                    get_duration_in_seconds(current_sf_note.get_dur());
        } else {
            unchanged_sf_note = current_sf_note;
            unchanged_sf_note_event_ind = k;
        }

    }

    // This part does a look around each note in the event sequence
    // To build the "previous-current-next" trio of notes
    var ev_len = sf_note_play_events.length;
    for (var q = 0; q < ev_len; q++) {

        var the_note = sf_note_play_events[q].note;

        // Locate the "previous" note
        var ct = q;
        var prev_note = the_note; // This is default
        for (w = 0; w < ev_len; w++) {
            if (sf_note_play_events[ct].note !== the_note) {
                prev_note = sf_note_play_events[ct].note;
                break;
            }
            if (--ct < 0) {
                ct = ev_len - 1;
            }
        }

        // Locate the "next" note
        ct = q;
        var next_note = the_note; // This is default
        for (w = 0; w < ev_len; w++) {
            if (sf_note_play_events[ct].note !== the_note) {
                next_note = sf_note_play_events[ct].note;
                break;
            }
            if (++ct >= ev_len) {
                ct = 0;
            }
        }

        // Store the notes
        var the_notes = [prev_note, the_note, next_note];
        sf_note_play_events[q].lookaround = the_notes;

    }

    // Return play events and the selected note
    return {"events": sf_note_play_events,
        "selected_sf_note": sf_note_selected,
        "start_position": start_position,
        "total_duration": total_dur};
}


// Some additions to existing classes
// Draw particular note, e.g., "F#4" or clear it via display = false
comptoolsFretboard.prototype.updateExclusiveNote = function (note, display) {

    this.svg_fretboard.selectAll(".fretboard-marker-selected")
            .classed("fretboard-marker-selected", false);

    if (typeof display === "undefined")
    {
        display = true;
    }

    this.svg_fretboard.selectAll(".note-" + note.replace("#", "s").
            toLowerCase()).classed("fretboard-marker-selected", display);

};

comptoolsKeyboard.prototype.updateExclusiveNote = function (note, display) {

    this.svg_keyboard.selectAll(".keyboard-marker-selected")
            .classed("keyboard-marker-selected", false);

    if (typeof display === "undefined")
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
        if (notes.constructor !== Array) {
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
function comptoolsSfNotePlayerElement(note, dur, leg)
{

    // Check argument list
    var my_dur = '1/2';
    if (typeof dur !== "undefined")
    {
        my_dur = dur;
    }

    var my_leg = false;
    if (typeof leg !== "undefined") {
        my_leg = leg;
    }

    // Initialization 
    var self = this;

    // Check root and chord, use default (C maj) if unsupported
    var my_note = 'A#4';
    note = flats2sharps(note).toUpperCase().replace("H", "B"); // Make sure note is correct
    if (get_semitone_distance(note) < SF_ALTO_NOTE_LOW || get_semitone_distance(note) > SF_ALTO_NOTE_HIGH) {
        console.log('Wrong note detected. Using default value.');
    } else {
        my_note = note;
    }

    this.my_note = my_note;

    // Timeline correspondence
    this.timeline_id = null;

    // Indices for duration and octave: defaults to length of 1/2 and 3rd octave
    this.duration_index = SF_NOTE_LENGTHS.indexOf(my_dur);
    if (this.duration_index === -1) {
        my_dur = '1/2';
        this.duration_index = SF_NOTE_LENGTHS.indexOf('1/2');
        console.log('Wrong duration detected. Using default value.');
    }

    // Also methods to get actual values
    this.get_dur = function () {
        return SF_NOTE_LENGTHS[this.duration_index];
    };

    // Play this chord
    this.play = function () {
        play_sf_note(this.my_note, get_duration_in_seconds(this.get_dur()));
    };

    // Whether to use legato with several same chords
    this.legato = my_leg;

    this.elem_id = 'sf-note-list-item-' + sf_note_list_counter++;

    // Replace the values
    var my_sf_note_elem = SF_NOTE_LIST_ITEM_TEMPLATE.replace('{{sf-note-text}}', note);
    my_sf_note_elem = my_sf_note_elem.replace('{{sf-note-length}}', my_dur);

    // Add to DOM
    var sf_note_list_elem = d3.select("#" + SF_NOTE_LIST_ID);
    this.list_elem = sf_note_list_elem.append('li')
            .attr('class', SF_NOTE_LIST_ITEM_CLASS)
            .attr('id', this.elem_id)
            .html(my_sf_note_elem);

    // Add also ID to canvas
    d3.select("#" + this.elem_id + " .sf-note-canvas")
            .attr('id', this.elem_id + "-canvas");

    // Set up legato
    d3.select("#" + this.elem_id + ' .sf-note-legato')
            .classed('selected', this.legato);

    // Assign actions

    // Legato
    d3.select("#" + this.elem_id + ' .sf-note-legato')
            .on('click', function () {
                self.legato = !self.legato;
                d3.select(this).classed('selected', self.legato);
                if (typeof comptools_config.sf_note_player !== "undefined") {
                    comptools_config.sf_note_player.update_callback();
                }
            }
            );

    // Note selection
    d3.select("#" + this.elem_id + ' .sf-note-header .sf-note-text')
            .on('click', this.clickHandler());

    // Duration controls
    d3.select('#' + this.elem_id + ' .sf-note-length .sf-note-reduce-value')
            .on('click', function () {
                self.updateDuration(-1);
                if (typeof comptools_config.sf_note_player !== "undefined") {
                    comptools_config.sf_note_player.update_callback();
                }
            });

    d3.select('#' + this.elem_id + ' .sf-note-length .sf-note-add-value')
            .on('click', function () {
                self.updateDuration(1);
                if (typeof comptools_config.sf_note_player !== "undefined") {
                    comptools_config.sf_note_player.update_callback();
                }
            });


    // Delete and duplicate
    d3.select('#' + this.elem_id + ' .sf-note-actions .sf-note-delete')
            .on('click', function () {
                self.delete();
                if (typeof comptools_config.sf_note_player !== "undefined") {
                    comptools_config.sf_note_player.update_callback();
                }
            });

    d3.select('#' + this.elem_id + ' .sf-note-actions .sf-note-duplicate')
            .on('click', function () {
                // Get duration and octave by indices
                var dup_dur = SF_NOTE_LENGTHS[self.duration_index];
                var my_note = new comptoolsSfNotePlayerElement(self.my_note,
                        dup_dur);
                sf_note_list.push(my_note);
                if (typeof comptools_config.instrument_glue !== "undefined") {
                    my_note.selection_callback =
                            comptools_config
                            .instrument_glue
                            .funHighlightSfNoteListElementNotes;
                }
                if (typeof comptools_config.sf_note_player !== "undefined") {
                    comptools_config.sf_note_player.update_callback();
                }
            });

    // Vexflow notation. Vexflow must be available!
    this.updateNotation = function () {

        // Only run if VF present
        if (VF !== null) {

            var match = note_scinot.exec(self.my_note);
            var new_note = match[1] + "/" + match[2];

            var my_dur = "";
            if (self.get_dur() !== "1")
            {
                my_dur = self.get_dur().split("/")[1];
            } else
            {
                my_dur = self.get_dur();
            }

            // Check for special duration rendering cases
            // TODO: Not extremely well done task...should
            // do via "duration modifiers" with subdivisions
            var add_txt = "";
            switch (self.get_dur()) {
                case "1/24":
                    my_dur = "16";
                    add_txt = "3";
                    break;
                case "1/12":
                    my_dur = "8";
                    add_txt = "3";
                    break;
                case "1/6":
                    my_dur = "4";
                    add_txt = "3";
                    break;
                case "1/3":
                    my_dur = "2";
                    add_txt = "3";
                    break;
                case "2/3":
                    my_dur = "1";
                    add_txt = "3";
                    break;
                default:
                    // Do nothing
                    break;
            }

            // Create an SVG renderer and attach it to the DIV element named "boo".
            var div = document.getElementById(self.elem_id + "-canvas");
            div.innerHTML = "";

            var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

            // Configure the rendering context.
            renderer.resize(200, 140);
            var context = renderer.getContext();
            context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

            var stave = new VF.Stave(60, 10, 80);

            // Add a clef and time signature.
            stave.addClef("treble");

            // Connect it to the rendering context and draw!
            stave.setContext(context).draw();

            // Create the note(s)
            var notes = [
                new VF.StaveNote({keys: [new_note], duration: my_dur, auto_stem: true})
            ];

            // Add "sharp" accidental, if necessary
            if (new_note.indexOf("#") !== -1) {
                notes[0].addAccidental(0, new VF.Accidental("#"));
            }

            // Check which line to draw the text to
            var draw_line = 9;
            if (get_semitone_distance(self.my_note) < 59) {
                draw_line = 2;
            }

            var text = new VF.TextNote({
                text: add_txt,
                font: {
                    family: "Arial",
                    size: 12,
                    weight: "bold"
                },
                duration: 'w'
            })
                    .setLine(draw_line) // 2 or 9 depending on the note
                    .setStave(stave)
                    .setJustification(VF.TextNote.Justification.LEFT);

            var voice = new VF.Voice({num_beats: 4, beat_value: 4}).setMode(2);
            voice.addTickables(notes);

            var voice2 = new VF.Voice({num_beats: 4, beat_value: 4}).setMode(2);
            voice2.addTickables([text]);

            // Format and justify the notes to 400 pixels.
            var formatter = new VF.Formatter()
                    .joinVoices([voice, voice2]).format([voice, voice2], 80);

            // Render voice
            voice.draw(context, stave);
            text.setContext(context).draw();
        }

    };

    // Update duration
    this.updateDuration = function (dir)
    {
        // Add to current index, check that it's within bounds
        this.duration_index += dir;

        this.duration_index =
                saturate_value(this.duration_index, 0, SF_NOTE_LENGTHS.length - 1);

        // Set the appropriate value in the text box
        var my_dur = SF_NOTE_LENGTHS[this.duration_index];
        d3.select('#' + this.elem_id + ' .sf-note-length .sf-note-text-input')
                .attr('value', my_dur);

        self.updateNotation();

    };

    // Delete method
    this.delete = function ()
    {
        // Check if this object is the selected one in player and remove it
        if (typeof comptools_config.sf_note_player !== "undefined" &&
                this === comptools_config.sf_note_player.current_note) {
            comptools_config.sf_note_player.current_note = null;
        }

        this.list_elem.remove();
        sf_note_list.remove_obj_by_prop('elem_id', this.elem_id);

        if (typeof comptools_config.sf_note_player !== "undefined") {
            comptools_config.sf_note_player.update_callback();
        }

        return true;
    };

    // Finally, update the notation
    this.updateNotation();

}

// Note selection callback
comptoolsSfNotePlayerElement.prototype.clickHandler = function ()
{
    var self = this;
    return function (d, i) {

        // TODO: This solution is quite poor in general since how do we know 
        // which is the parent element and whether it is the correct one?
        var the_elem = this.parentElement.parentElement;
        var action = !d3.select(the_elem).classed("sf-note-selected");

        // Remove all other selections
        d3.selectAll('.' + SF_NOTE_LIST_ITEM_CLASS
                + ' .uk-card').classed('sf-note-selected', false);

        // Assign selection
        d3.select(the_elem).classed("sf-note-selected", action);

        // Update the player with currently selected chord information
        if (typeof comptools_config.sf_note_player !== "undefined") {
            if (action) {
                comptools_config.sf_note_player.current_note = self;
            } else {
                comptools_config.sf_note_player.current_note = null;
            }
        }

        // Check if the note list exists and envoke the selection_callback
        if (typeof sf_note_list !== "undefined") {
            // Pass the object reference to selection callback
            var my_elem_id = d3.select(the_elem.parentElement).attr('id');
            var my_obj = sf_note_list[
                    sf_note_list.find_obj_by_prop('elem_id', my_elem_id)];
            my_obj.selection_callback(my_obj, action);
        } else {
            console.log('Note list (sf_note_list) is not found in scope.');
        }
    };
};

comptoolsSfNotePlayerElement.prototype.selection_callback = function (my_obj)
{
    return null;
}

function comptoolsSfNotePlayer(player_class)
{

    var self = this;

    this.playing = false;           // Player state
    this.current_event_index = 0;   // Event index for the scheduler
    this.current_note = null;      // Currently selected chord element

    // Get tempo from config file if there is one
    var my_tempo = 120; // Defaults to 120 bpm
    if (typeof comptools_config.tempo !== "undefined") {
        my_tempo = comptools_config.tempo;
    }

    // Add the basic controls first
    d3.select(player_class).html(
            d3.select(player_class).html()
            + SF_NOTE_LIST_CONTROL_TEMPLATE.replace("{{sf-note-bpm}}", my_tempo));

    // Finally, add the container
    d3.select(player_class).html(
            d3.select(player_class).html() + SF_NOTE_LIST_TEMPLATE);

    // Assign controls
    d3.select(player_class + ' .sf-note-play').on('click', function () {
        self.togglePlay();
    });

    // Pressing the space bar has the same effect
    // Bind a keyboard event as well
    Mousetrap.bind("space", function (e) {
        self.togglePlay();
    });

    // Prevent default behavior of space bar as well
    window.onkeydown = function (e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // Event: begin play
    this.togglePlay = function () {

        // Toggle play state
        this.playing = !this.playing;
        d3.select(player_class + ' .sf-note-play')
                .classed('selected', this.playing);
        ;

        // Check if playing is stopped
        if (!this.playing) {
            // Stop transport and cancel all events
            Tone.Transport.stop();

            // Stop MIDI, if present
            if (typeof comptools_midi_player !== "undefined" &&
                    comptools_midi_player.ready) {
                comptools_midi_player.flushNoteBuffer();
            }

            return true;
        }

        // Parse tempo and update it in the config file if needed
        var now_tempo = d3.select(player_class + ' .sf-note-bpm')
                .property('value');

        // Convert to integer and store value in the configuration object
        if (typeof comptools_config.tempo !== "undefined") {
            comptools_config.tempo = parseInt(now_tempo);
        }

        // Return early if there is nothing to play
        if (typeof sf_note_list === "undefined" || sf_note_list.length == 0) {
            // Disable play button
            d3.select(player_class + ' .sf-note-play').classed('selected', false);
            return null;
        }

        // Get the events and store them in a global variable
        var myev = parse_sf_note_player();
        sf_note_play_events = myev.events;

        // If no chord is selected, start from the first one
        var start_sf_note = 0;
        if (myev.selected_sf_note !== -1) {
            start_sf_note = myev.selected_sf_note;
        }

        // Clear all previous events
        Tone.Transport.cancel(0);

        // Setup transport
        Tone.Transport.position = myev.start_position;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = myev.total_duration;
        Tone.Transport.loop = true;

        // Schedule all play events
        var my_position = 0;
        for (var k = 0; k < sf_note_play_events.length; k++) {
            Tone.Transport.schedule(function (time) {
                self.process_events();
            }, my_position);
            my_position += sf_note_play_events[k].interval;
        }

        // Start processing the events
        this.current_event_index = start_sf_note;

        // Start transport
        Tone.Transport.start();

    };

    this.process_events = function () {

        var current_event = sf_note_play_events[self.current_event_index++];

        // Repeat
        if (self.current_event_index >= sf_note_play_events.length) {
            self.current_event_index = 0;
        }

        // Deselect all chords
        d3.selectAll('.' + SF_NOTE_LIST_ITEM_CLASS + ' div.uk-card')
                .classed('sf-note-selected', false);

        // Select this chord
        d3.select('#' + current_event.highlight_id + " div.uk-card")
                .classed('sf-note-selected', true);

        // Update the player with currently selected chord information
        if (typeof comptools_config.sf_note_player !== "undefined") {
            this.current_note = current_event.object;
        } else {
            this.current_note = null;
        }

        // Start playing the note, if not legato
        if (!current_event.legato) {
            // Play the notes
            player_play_sf_note(transpose_note(current_event.object.my_note, -9),
                    current_event.duration);

            // Also highlight the notes
            if (typeof comptools_config.instrument_glue !== "undefined") {
                var my_glue = comptools_config.instrument_glue;
                my_glue
                        .funHighlightSfNoteListElementLookaroundNotes(current_event.lookaround);
            }

        }
    };

    // Export chords
    this.export_notes = function () {

        // Get the current order
        var play_order_ids = [];
        d3.selectAll('#' + CHORD_LIST_ID + ' .' + CHORD_LIST_ITEM_CLASS).
                each(function () {
                    play_order_ids.push(d3.select(this).attr('id'));
                });

        var text = "";
        var k;
        for (k = 0; k < play_order_ids.length; k++) {
            var tc = chord_list.get_obj_by_prop('elem_id', play_order_ids[k]);
            text += tc.my_root + " " + tc.my_chord + " "
                    + tc.get_dur() + " " + tc.get_oct()
                    + (tc.legato ? " leg" : "") + "; ";
        }

        // Beautification
        text = text.trim();
        if (text.slice(-1) === ";") {
            text = text.substr(0, text.length - 1);
        }

        // Add the comment with some additional information
        var add_com = "";
        if (typeof comptools_config.theory !== "undefined" &&
                comptools_config.theory.root !== "null") {
            add_com = "{*Scale: " + comptools_config.theory.root + " " +
                    comptools_config.theory.scale + "*} ";
        }

        return add_com + text;
    };

    // Import chords
    this.import_notes = function (text) {

        // Clear the current chords
        this.clear();

        // Remove the comments
        text = text.replace(/{\*.*\*}/, "");

        // Parse text
        var the_chords = text.split(";");
        var k;

        for (k = 0; k < the_chords.length; k++) {

            // Preprocess the chord text
            var this_chord = the_chords[k].replace(/\s+/g, ' ').trim();

            // Break the chord into pieces. Currently length determines
            // the contents, although this is not a very good approach
            // (a parser would have been better). But for simplicity, we
            // just use this method.
            var chord_elem = this_chord.split(" ");

            // Parse depending on the length
            if (chord_elem.length === 4 || chord_elem.length === 5) {

                // Root, chord, duration, octave
                var my_root = chord_elem[0];
                var my_chord = chord_elem[1];
                var my_dur = chord_elem[2];
                var my_oct = parseInt(chord_elem[3]);

                // Determine whether this is a legato
                var my_leg = false;
                if (chord_elem.length === 5 && chord_elem[4] === 'leg') {
                    my_leg = true;
                }

                // Add the chord to timeline
                var my_chord = new comptoolsChordPlayerElement(my_root,
                        my_chord, my_dur, my_oct, my_leg);
                chord_list.push(my_chord);

                // Because the relationship is many to one, we'll have to use
                // a config variable here---reference to instrument glue.
                // Therefore, it must be assigned beforehand.
                if (typeof comptools_config.instrument_glue !== "undefined") {
                    my_chord.selection_callback =
                            comptools_config
                            .instrument_glue
                            .funHighlightChordListElementNotes;
                }

                if (typeof comptools_config.sf_note_player !== "undefined") {
                    comptools_config.chord_player.update_callback();
                }

            } else
            {
                // Do nothing
            }

        }

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

        // Automatically transpose and
        // add only if within range
        var myadd = transpose_note(note, 9);
        if (get_semitone_distance(myadd) < SF_ALTO_NOTE_LOW ||
                get_semitone_distance(myadd) > SF_ALTO_NOTE_HIGH)
        {
            // Do nothing
        } else if (action)  // If we deselect note, do nothing
        {
            add_sf_note_to_player(myadd, '1/2');
        }

        // Show fingering in any case
        self.fingering_chart.draw_fingerings(transpose_note(note, +9));
    };

    this.funHighlightSfNoteListElementNotes = function (obj, act) {
        self.fingering_chart.draw_fingerings(obj.my_note);
    };

    this.funHighlightSfNoteListElementLookaroundNotes = function (notes) {
        self.fingering_chart.draw_fingerings(notes);
    };
}
;