<h1>Boxific</h1>

<div id="boxific-plugin-description">
	<ul>
		<li><?php _e('Need help? Please visit', 'boxific')?> <a href="http://www.pr-software.net/" title="<?php _e('Official boxific website', 'boxific')?>"><?php _e('official plugin website', 'boxific')?></a></li>
	</ul>
</div>

<div class="boxific-controls">
	<ul>
		<li><a href="javascript:void(0);" class="collapse-all"><?php _e('collapse all', 'boxific')?></a></li>
		<li><a href="javascript:void(0);" class="expand-all"><?php _e('expand all', 'boxific')?></a></li>
	</ul>
	<div class="save-all">
		<a href="javascript:void(0);"><span><?php _e('Save all changes', 'boxific')?></span></a>
	</div>
</div>

<div id="boxific-box-factory">
	<?php if( !empty( $rules ) ):?>
		<?php foreach( $rules as $k => $rule ): ?>
			<?php $rule['id'] = $k;?>
			<?php include('boxific_rule.php'); ?>
		<?php endforeach;?>
	<?php endif;?>
</div><!--#boxific-box-factory-->

<div class="boxific-controls">
	<ul>
		<li><a href="javascript:void(0);" class="collapse-all"><?php _e('collapse all', 'boxific')?></a></li>
		<li><a href="javascript:void(0);" class="expand-all"><?php _e('expand all', 'boxific')?></a></li>
	</ul>
	<div class="save-all">
		<a href="javascript:void(0);"><span><?php _e('Save all changes', 'boxific')?></span></a>
	</div>
</div>

<div id="boxific-add-rule">
	<a href="javascript:void(0);"><span><?php _e('New box rule', 'boxific')?></span></a>
</div>
